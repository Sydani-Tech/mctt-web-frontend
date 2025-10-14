"use client";

import PageLayout from "@/components/Common/PageLayout";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomSelect from "@/utils/CustomSelect";
import CustomInput from "@/utils/CustomInput";
import SuccessModal from "@/utils/SuccessModal";
import { useState } from "react";
import HealthFacilitySelect from "@/components/Supervisor/Form/HealthFacilities";
import { phuArray } from "@/utils/utils";

const sessionTypes = [
  { label: "Fixed", value: "fixed" },
  { label: "Outreach", value: "outreach" },
  { label: "Mobile", value: "mobile" },
];

const frequencies = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Quarterly", value: "quarterly" },
];

const validationSchema = Yup.object({
  healthFacility: Yup.string().required("Health facility is required"),
  villageName: Yup.string().required("Village/Settlement name is required"),
  activityType: Yup.string().required("Activity type is required"),
  sessionType: Yup.string().required("Session type is required"),
  frequency: Yup.string().required("Frequency is required"),
  contactPerson: Yup.string().required("Contact person is required"),
  contactPhone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Must be only digits"),
});

const OPMonitoringForm = () => {
  const [successful, setSuccessful] = useState(false);

  return (
    <PageLayout>
      <SuccessModal
        linkTo={`op-monitoring`}
        successType="OP Monitoring Session"
        onClose={() => setSuccessful(false)}
        isOpen={successful}
      />

      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          OP Monitoring Session Form
        </h2>

        <Formik
          initialValues={{
            healthFacility: "",
            villageName: "",
            activityType: "",
            sessionType: "",
            frequency: "",
            contactPerson: "",
            contactPhone: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form Data:", values);
            setSuccessful(true);
          }}
        >
          {({ values, setFieldValue, isSubmitting }) => (
            <Form className="space-y-5">
              <HealthFacilitySelect
                name="healthFacility"
                label="Health Facility"
                placeholder="Select health facility"
                value={values.healthFacility}
                onChange={(val) => setFieldValue("healthFacility", val)}
                options={phuArray}
              />

              <CustomInput
                isRequired
                name="villageName"
                label="Name of villages/settlements/neighborhoods"
                placeholder="Enter village name"
              />

              {/* Activity Type */}
              <CustomInput
                isRequired
                name="activityType"
                label="Activity to address high-risk community ('Hard to Reach')"
                placeholder="Enter activity type"
              />

              {/* Session Type */}
              <CustomSelect
                name="sessionType"
                label="Type of Session"
                placeholder="Select session type"
                value={values.sessionType}
                onChange={(val) => setFieldValue("sessionType", val)}
                options={sessionTypes}
              />

              {/* Frequency */}
              <CustomSelect
                name="frequency"
                label="Frequency of Sessions"
                placeholder="Select frequency"
                value={values.frequency}
                onChange={(val) => setFieldValue("frequency", val)}
                options={frequencies}
              />

              {/* Contact Person */}
              <CustomInput
                isRequired
                name="contactPerson"
                label="Name of community contact person"
                placeholder="Enter contact person's name"
              />

              {/* Contact Phone */}
              <CustomInput
                isRequired
                name="contactPhone"
                type="tel"
                label="Mobile phone number of community contact person"
                placeholder="Enter phone number"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="gap-2 flex items-center justify-center w-full px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:bg-main/80 transition duration-300"
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

export default OPMonitoringForm;
