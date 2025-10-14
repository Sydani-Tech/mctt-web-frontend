/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, FieldArray, useFormikContext } from "formik";
import CustomInput from "@/utils/CustomInput";
import YesNoField from "@/utils/YesOrNoField";
import CustomSelect from "@/utils/CustomSelect";
import { RiDeleteBin6Line } from "react-icons/ri";
import { calculateAgeInYears } from "@/utils/utils";

export default function StepThree() {
  const { values, setFieldValue } = useFormikContext<any>();
  const { areThereChildren } = values;
  return (
    <div className="space-y-6">
      <YesNoField
        name="areThereChildren"
        label="12. Are there any children in this household?"
        isRequired={true}
      />
      {areThereChildren === "yes" && (
        <>
          <FieldArray name="children">
            {({ push, remove }) => (
              <div className="space-y-6 rounded-xl">
                <h3 className="text-xl font-medium text-gray-700">
                  13. Children
                </h3>

                {values.children.map((_: any, index: number) => {
                  const dobString = values.children[index].dob;
                  const ageInYears = calculateAgeInYears(dobString);
                  return (
                    <div
                      key={index}
                      className="p-4 lg:p-6 space-y-4 bg-white border border-gray-200 rounded-xl"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-medium text-gray-600">
                          Child {index + 1}
                        </h4>
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="flex items-center gap-1.5 text-gray-900 hover:text-red-500 transition duration-300"
                        >
                          <RiDeleteBin6Line />
                          <span>Remove</span>
                        </button>
                      </div>

                      <CustomInput
                        isRequired={false}
                        name={`children[${index}].fullName`}
                        label="Name"
                      />

                      <CustomInput
                        isRequired={false}
                        name={`children[${index}].dob`}
                        type="date"
                        label="Date of Birth"
                      />

                      <CustomSelect
                        name={`children[${index}].gender`}
                        label="Gender"
                        placeholder="Select Gender"
                        value={values.children[index].gender}
                        onChange={(val) =>
                          setFieldValue(`children[${index}].gender`, val)
                        }
                        options={[
                          { value: "male", label: "Male" },
                          { value: "female", label: "Female" },
                        ]}
                      />

                      {ageInYears !== null && ageInYears < 5 && (
                        <>
                          <YesNoField
                            isRequired={false}
                            name={`children[${index}].hasCard`}
                            label="Does the child have a vaccination card?"
                          />
                          {values?.children[index].hasCard === "yes" && (
                            <div className="space-y-2">
                              <label className="text-base font-medium text-gray-600">
                                Antigens Received
                              </label>
                              <div className="grid pt-1 grid-cols-2 gap-2">
                                {[
                                  "OPV 0",
                                  "HepB 0",
                                  "BCG",
                                  "OPV 1",
                                  "Penta 1",
                                  "PCV 1",
                                  "Rota 1",
                                  "IPV 1",
                                  "OPV 2",
                                  "Penta 2",
                                  "PCV 2",
                                  "Rota 2",
                                  "OPV 3",
                                  "Penta 3",
                                  "PCV 3",
                                  "Rota 3",
                                  "IPV 2",
                                  "Measles 1",
                                  "Yellow Fever",
                                  "Meningitis (MEN A)",
                                  "Measles 2",
                                ].map((antigen) => (
                                  <label
                                    key={antigen}
                                    className="flex items-center gap-2"
                                  >
                                    <Field
                                      type="checkbox"
                                      name={`children[${index}].antigens`}
                                      value={antigen}
                                      checked={values.children[
                                        index
                                      ].antigens?.includes(antigen)}
                                      className="h-4 w-4 text-blue-500"
                                    />
                                    <span className="text-sm">{antigen}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}

                <button
                  type="button"
                  onClick={() =>
                    push({
                      fullName: "",
                      dob: "",
                      gender: "",
                      hasCard: "",
                      antigens: [],
                    })
                  }
                  className="px-6 py-3 text-sm rounded-xl bg-main text-white hover:bg-main/30"
                >
                  + Add Child
                </button>
              </div>
            )}
          </FieldArray>
        </>
      )}
    </div>
  );
}
