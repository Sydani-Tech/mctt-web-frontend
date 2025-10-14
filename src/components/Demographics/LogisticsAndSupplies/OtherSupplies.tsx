/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomInput from "@/utils/CustomInput";
import { FieldArray } from "formik";
import { RiDeleteBin6Line } from "react-icons/ri";

const OtherSuppliesStep = () => {
  return (
    <div>
      <span className="text-base lg:text-lg mt-2">
        Other supplies(LLINs, etc)
      </span>

      <FieldArray
        name="otherSupplies"
        render={(arrayHelpers) => (
          <div className="space-y-6 pt-4 rounded-xl">
            {arrayHelpers.form.values.otherSupplies.map(
              (_: any, index: number) => (
                <div
                  key={index}
                  className="p-4 space-y-2 border-main/50 border rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium text-gray-700 mb-2">
                      Supply {index + 1}
                    </h2>
                    <div
                      onClick={() => arrayHelpers.remove(index)}
                      className="flex text-gray-900 hover:cursor-pointer hover:text-gray-400 transition duration-300 gap-1.5 items-center"
                    >
                      <RiDeleteBin6Line />
                      <span>Delete</span>
                    </div>
                  </div>
                  <CustomInput
                    isRequired
                    name={`otherSupplies[${index}].title`}
                    label="Title"
                  />
                  <CustomInput
                    isRequired
                    name={`otherSupplies[${index}].dosesOpenedPerSession`}
                    label="Doses of vials opened per session"
                    type="number"
                  />
                  <CustomInput
                    isRequired
                    name={`otherSupplies[${index}].dosesAdministeredPerSession`}
                    label="Doses administered per session"
                    type="number"
                  />
                  <CustomInput
                    isRequired
                    name={`otherSupplies[${index}].expectedCoverage`}
                    label="Expected coverage (%)"
                    type="number"
                  />
                  <CustomInput
                    isRequired
                    name={`otherSupplies[${index}].sessionsPerWeek`}
                    label="Sessions per week"
                    type="number"
                  />

                  <CustomInput
                    isRequired
                    name={`otherSupplies[${index}].statusOfMDVPI`}
                    label="Vial size"
                    type="number"
                  />
                  <CustomInput
                    isRequired
                    name={`otherSupplies[${index}].vialSize`}
                    label="Vial size"
                    type="number"
                  />
                </div>
              )
            )}

            <button
              type="button"
              className="px-6 py-3 text-sm rounded-xl bg-main text-white hover:bg-main/30"
              onClick={() =>
                arrayHelpers.push({
                  title: "",
                  dosesOpenedPerSession: "",
                  dosesAdministeredPerSession: "",
                  expectedCoverage: "",
                  sessionsPerWeek: "",
                  vialSize: "",
                  statusOfMDVPI: "",
                  anticipatedWastageFct: 1.11,
                })
              }
            >
              + Add
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default OtherSuppliesStep;
