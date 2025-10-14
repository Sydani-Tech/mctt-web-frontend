import PageLayout from "@/components/Common/PageLayout";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import HealthFacilitySelect from "./HealthFacilities";
import { phuArray } from "@/utils/utils";
import CustomSelect from "@/utils/CustomSelect";
import CustomInput from "@/utils/CustomInput";
import SuccessModal from "@/utils/SuccessModal";
import { useState } from "react";

const months = [
  { label: "January", value: "january" },
  { label: "February", value: "february" },
  { label: "March", value: "march" },
  { label: "April", value: "april" },
  { label: "May", value: "may" },
  { label: "June", value: "june" },
  { label: "July", value: "july" },
  { label: "August", value: "august" },
  { label: "September", value: "september" },
  { label: "October", value: "october" },
  { label: "November", value: "november" },
  { label: "December", value: "december" },
];

const validationSchema = Yup.object({
  healthFacility: Yup.string().required("Health facility is required"),
  month: Yup.string().required("Month is required"),
  visitationDate: Yup.date().required("Visitation date is required"),
  numberOfSupervisors: Yup.number()
    .required("Required")
    .positive("Must be positive")
    .integer("Must be an integer"),
  responsiblePerson: Yup.string().required("Responsible person is required"),
});

const SupervisionForm = () => {
  const [successful, setSuccessful] = useState(false);

  console.log(phuArray);
  return (
    <PageLayout>
      <SuccessModal
        linkTo={`supervision`}
        successType="Supervision"
        onClose={() => {
          close();
        }}
        isOpen={successful}
      />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Supervision Form
        </h2>

        <Formik
          initialValues={{
            healthFacility: "",
            month: "",
            visitationDate: "",
            numberOfSupervisors: "",
            responsiblePerson: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setSuccessful(true);
            console.log("Form Data:", values);
          }}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form className="space-y-5">
              <HealthFacilitySelect
                name="healthFacility"
                label="Name of health facility to be visited"
                placeholder="Select health facility"
                value={values.healthFacility}
                onChange={(val) => {
                  console.log(val);
                  setFieldValue("healthFacility", val);
                }}
                options={phuArray}
              />
              {/* <div>
                <label className="block text-gray-700 mb-2">
                  Name of health facility to be visited
                </label>
                <Field
                  as="select"
                  name="healthFacility"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a facility</option>
                  {healthFacilities.map((facility, idx) => (
                    <option key={idx} value={facility}>
                      {facility}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="healthFacility"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div> */}

              {/* Month */}
              <CustomSelect
                name="month"
                label="Month of visitation"
                placeholder="Select month"
                value={values.month}
                onChange={(val) => {
                  setFieldValue("month", val);
                }}
                options={months}
              />
              {/* <div>
                <label className="block text-gray-700 mb-2">
                  Month of visitation
                </label>
                <Field
                  as="select"
                  name="month"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a month</option>
                  {months.map((month, idx) => (
                    <option key={idx} value={month}>
                      {month}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="month"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div> */}

              <CustomInput
                isRequired
                name={"visitationDate"}
                type="date"
                label="Date of visitation"
                placeholder="Enter age"
              />
              <CustomInput
                isRequired
                name={`numberOfSupervisors`}
                type="number"
                label="How many individuals will be conducting supervision?"
                // placeholder="Enter first "
              />
              <CustomInput
                isRequired={false}
                name={`responsiblePerson`}
                label="Responsible person(s)"
                // placeholder="Enter first "
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="gap-2 flex items-center justify-center w-full px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:bg-main/80 transition duration-300"
                // className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </PageLayout>
  );
};

export default SupervisionForm;
