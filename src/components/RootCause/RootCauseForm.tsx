/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, FieldArray } from "formik";
import CustomInput from "@/utils/CustomInput";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import PageLayout from "@/components/Common/PageLayout";
import { RiDeleteBin6Line } from "react-icons/ri";
import { rootCauseAnalysisSchema } from "./validation";
import { useNavigate } from "react-router";
import { useRootCause } from "../context/RootCauseContext";
import SuccessModal from "@/utils/SuccessModal";
import { useState } from "react";

const formSections = [
  { key: "reachingTarget", label: "Reaching the Target Population" },
  { key: "supportiveSupervision", label: "Supportive Supervision" },
  { key: "engagingCommunities", label: "Engaging Communities" },
  { key: "monitoringData", label: "Monitoring & Use of Data for Action" },
  { key: "planningResources", label: "Planning & Management of Resources" },
  { key: "coldChain", label: "Cold Chain & Vaccine Management" },
  {
    key: "integration",
    label: "Integration with Other Programmes (MNCH/Nutrition)",
  },
  { key: "surveillance", label: "Surveillance" },
];

const initialValues = formSections.reduce((acc, section) => {
  acc[section.key] = [
    {
      problem: "",
      rootCause: "",
      solutionLimited: "",
      solutionExtra: "",
      responsible: "",
    },
  ];
  return acc;
}, {} as any);

const RootCauseAnalysisForm = () => {
  const [successful, setSuccessful] = useState(false);
  const navigate = useNavigate();
  const { setRootCause } = useRootCause();
  return (
    <PageLayout>
      <SuccessModal
        linkTo={`root-cause`}
        successType="Root cause"
        onClose={() => {
          setSuccessful(false);
        }}
        isOpen={successful}
      />
      <div className="flex flex-col gap-6 h-full max-w-[900px] mx-auto">
        <h1 className="text-base lg:text-2xl font-medium text-main">
          Root Cause Analysis
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={rootCauseAnalysisSchema}
          onSubmit={(values) => {
            setRootCause((prev) => [
              ...prev,
              {
                ...values,
                createdAt: new Date().toISOString(),
              },
            ]);
            setSuccessful(true);
          }}
        >
          {({ values }) => (
            <Form className="space-y-10 p-4">
              {formSections.map((section) => (
                <div
                  key={section.key}
                  className="border border-main/20 rounded-xl p-6"
                >
                  <h2 className="text-lg font-semibold mb-4">
                    {section.label}
                  </h2>

                  <FieldArray name={section.key}>
                    {({ remove, push }) => (
                      <div className="space-y-6">
                        {values[section.key].map((_: any, index: number) => (
                          <div
                            key={index}
                            className="grid gap-4 border-b border-gray-200 pb-4"
                          >
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center pt-2 justify-between">
                                <h2 className="text-xl font-medium text-gray-700">
                                  Problem {index + 1}
                                </h2>
                                <div
                                  onClick={() => remove(index)}
                                  className="flex text-gray-900 hover:cursor-pointer hover:text-gray-400 transition duration-300 gap-1.5 items-center"
                                >
                                  <RiDeleteBin6Line />
                                  <span>Delete</span>
                                </div>
                              </div>
                              <CustomInput
                                isRequired
                                type="text"
                                name={`${section.key}[${index}].problem`}
                                label="Problem Identified"
                                as="textarea"
                                rows={2}
                              />
                            </div>

                            <CustomInput
                              isRequired
                              type="text"
                              name={`${section.key}[${index}].rootCause`}
                              label="Root Cause of the Problem"
                              as="textarea"
                              rows={2}
                            />
                            <CustomInput
                              isRequired
                              type="text"
                              name={`${section.key}[${index}].solutionLimited`}
                              label="Solution with Limited Resources"
                              as="textarea"
                              rows={2}
                            />
                            <CustomInput
                              isRequired
                              type="text"
                              name={`${section.key}[${index}].solutionExtra`}
                              label="Solution Needing Additional Resources"
                              as="textarea"
                              rows={2}
                            />
                            <CustomInput
                              isRequired
                              type="text"
                              name={`${section.key}[${index}].responsible`}
                              label="Responsible Persons and Possible Timeline"
                              as="textarea"
                              rows={2}
                            />
                          </div>
                        ))}

                        <button
                          type="button"
                          onClick={() =>
                            push({
                              problem: "",
                              rootCause: "",
                              solutionLimited: "",
                              solutionExtra: "",
                              responsible: "",
                            })
                          }
                          className="px-4 py-3 text-sm bg-main text-white rounded-xl"
                        >
                          + Add Another Problem
                        </button>
                      </div>
                    )}
                  </FieldArray>
                </div>
              ))}
              <div className="w-full pt-10 flex justify-between">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="gap-2 flex items-center justify-cener px-4 py-3 border-[2px] border-main text-main font-bold rounded-lg hover:cursor-pointer hover:bg-main/4 transition duration-300"
                >
                  <IoCaretBack />
                  <span className="uppercase font-bold">Back</span>
                </button>

                <button
                  type="submit"
                  className="gap-2 flex items-center justify-center px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:bg-main/80 transition duration-300"
                >
                  <span className="uppercase font-bold">Submit</span>
                  <IoCaretForward />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </PageLayout>
  );
};

export default RootCauseAnalysisForm;
