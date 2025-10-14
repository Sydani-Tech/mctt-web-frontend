/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const sessionTypes = ["Fixed", "Outreach", "Fixed and Outreach"];
const monthOptions = months.map((m) => ({ label: m, value: m }));

interface FormValues {
  serviceDeliverySite: string;
  sessionType: string;
  fixedSessions: Record<string, number>;
  outreachSessions: Record<string, number>;
  outreachTransport: Record<string, number>;
  month: string;
  fixedHeld: number;
  outreachHeld: number;
}

const initialValues: FormValues = {
  serviceDeliverySite: "",
  sessionType: "",
  fixedSessions: Object.fromEntries(months.map((m) => [m, 0])),
  outreachSessions: Object.fromEntries(months.map((m) => [m, 0])),
  outreachTransport: Object.fromEntries(months.map((m) => [m, 0])),
  month: "",
  fixedHeld: 0,
  outreachHeld: 0,
};

const validationSchema = Yup.object({
  serviceDeliverySite: Yup.string().required("Required"),
  sessionType: Yup.string().required("Required"),
  fixedSessions: Yup.object().when("sessionType", {
    is: (val: string) => val === "Fixed" || val === "Fixed and Outreach",
    then: Yup.object().test(
      "all-months-filled",
      "All months must have numbers",
      (obj) =>
        obj && Object.values(obj).every((v) => v !== null && v !== undefined)
    ),
  } as any),

  outreachSessions: Yup.object().when("sessionType", {
    is: (val: string) => val === "Outreach" || val === "Fixed and Outreach",
    then: Yup.object().test(
      "all-months-filled",
      "All months must have numbers",
      (obj) =>
        obj && Object.values(obj).every((v) => v !== null && v !== undefined)
    ),
  } as any),
});

export default function AnnualRiForm() {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-xl font-bold mb-4">Service Delivery Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // calculate percentages
          const percentFixed =
            (values.fixedHeld /
              Object.values(values.fixedSessions).reduce((a, b) => a + b, 0)) *
            100;
          const percentOutreach =
            (values.outreachHeld /
              Object.values(values.outreachSessions).reduce(
                (a, b) => a + b,
                0
              )) *
            100;

          setSubmittedData({
            ...values,
            fixedHeld: percentFixed,
            outreachHeld: percentOutreach,
          });
          console.log("Submitted Data:", {
            ...values,
            percentFixed,
            percentOutreach,
          });
        }}
      >
        {({ values }) => (
          <Form className="space-y-6">
            {/* Service Delivery Site */}
            <div>
              <label className="block">Service Delivery Site</label>
              <Field
                name="serviceDeliverySite"
                className="border rounded px-2 py-1 w-full"
              />
              <ErrorMessage
                name="serviceDeliverySite"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Session Type */}
            <div>
              <label className="block">Type of Session</label>
              <Field
                as="select"
                name="sessionType"
                className="border rounded px-2 py-1 w-full"
              >
                <option value="">Select type</option>
                {sessionTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="sessionType"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Fixed Sessions */}
            {(values.sessionType === "Fixed" ||
              values.sessionType === "Fixed and Outreach") && (
              <div>
                <h3 className="font-semibold mt-4">
                  Number of Fixed Sessions Scheduled
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {months.map((month) => (
                    <div key={month}>
                      <label>{month}</label>
                      <Field
                        type="number"
                        name={`fixedSessions.${month}`}
                        className="border rounded px-2 py-1 w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outreach Sessions */}
            {(values.sessionType === "Outreach" ||
              values.sessionType === "Fixed and Outreach") && (
              <div>
                <h3 className="font-semibold mt-4">
                  Number of Outreach Sessions Scheduled
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {months.map((month) => (
                    <div key={month}>
                      <label>{month}</label>
                      <Field
                        type="number"
                        name={`outreachSessions.${month}`}
                        className="border rounded px-2 py-1 w-full"
                      />
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold mt-4">
                  Outreach Team Transport Allowance
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {months.map((month) => (
                    <div key={month}>
                      <label>{month}</label>
                      <Field
                        type="number"
                        name={`outreachTransport.${month}`}
                        className="border rounded px-2 py-1 w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Monthly Inputs */}
            <div>
              <h3 className="font-semibold mt-4">Monthly Data</h3>
              <div className="mb-2">
                <label>Month</label>
                <Field
                  as="select"
                  name="month"
                  className="border rounded px-2 py-1 w-full"
                >
                  <option value="">Select month</option>
                  {monthOptions.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.label}
                    </option>
                  ))}
                </Field>
              </div>

              {values.sessionType.includes("Fixed") && (
                <div className="mb-2">
                  <label>Number of Fixed Sessions Held</label>
                  <Field
                    type="number"
                    name="fixedHeld"
                    className="border rounded px-2 py-1 w-full"
                  />
                  <div>
                    % Fixed Held:{" "}
                    {(
                      (values.fixedHeld /
                        Object.values(values.fixedSessions).reduce(
                          (a, b) => a + b,
                          0
                        )) *
                        100 || 0
                    ).toFixed(2)}
                    %
                  </div>
                </div>
              )}

              {values.sessionType.includes("Outreach") && (
                <div className="mb-2">
                  <label>Number of Outreach Sessions Held</label>
                  <Field
                    type="number"
                    name="outreachHeld"
                    className="border rounded px-2 py-1 w-full"
                  />
                  <div>
                    % Outreach Held:{" "}
                    {(
                      (values.outreachHeld /
                        Object.values(values.outreachSessions).reduce(
                          (a, b) => a + b,
                          0
                        )) *
                        100 || 0
                    ).toFixed(2)}
                    %
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {submittedData && (
        <pre className="mt-4 bg-gray-100 p-2 rounded">
          {JSON.stringify(submittedData, null, 2)}
        </pre>
      )}
    </div>
  );
}
