/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomInput from "@/utils/CustomInput";
import { FieldArray, useFormikContext } from "formik";
import { RiDeleteBin6Line } from "react-icons/ri";

const StepOne = () => {
  const { values } = useFormikContext<any>();
  const { otherCases } = values;
  return (
    <div>
      <h1 className="text-base lg:text-2xl pb-5 font-medium text-main leading-none tracking-[0.02em]">
        Surveillance data
      </h1>
      <div className="space-y-4">
        <CustomInput
          isRequired={true}
          name="numberOfMeasles12M"
          type="number"
          label="1. Number of measles confirmed or suspected cases in the last 12 months"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name="numberOfAFP12M"
          label="2. Number of AFP cases reported in last 12 months"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name="numberOfTetanus12M"
          label="3. Neonatal Tetanus in the last 12 months"
        />
        <span className="text-base lg:text-lg mt-2">
          4. Others Number of other cases (eg. Diphteria, Pertussis, Yellow
          Fever)
        </span>
        <FieldArray
          name="otherCases"
          render={(arrayHelpers) => (
            <div className="space-y-6 pt-4 rounded-xl">
              {otherCases.map((_: any, index: number) => (
                <div
                  key={index}
                  className="p-4 space-y-2 border-main/50 border rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium text-gray-700 mb-2">
                      Case {index + 1}
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
                    isRequired={true}
                    name={`otherCases[${index}].caseName`}
                    label="Name"
                  />

                  <CustomInput
                    isRequired={true}
                    type="number"
                    name={`otherCases[${index}].number`}
                    label="Number of cases"
                  />
                </div>
              ))}

              <button
                type="button"
                className="px-6 py-3 text-sm rounded-xl bg-main text-white hover:bg-main/30"
                onClick={() =>
                  arrayHelpers.push({
                    caseName: "",
                    number: "",
                  })
                }
              >
                + Add Case
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default StepOne;
