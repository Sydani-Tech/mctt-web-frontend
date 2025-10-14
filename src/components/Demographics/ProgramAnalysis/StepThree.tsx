/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomInput from "@/utils/CustomInput";
import { FieldArray, useFormikContext } from "formik";
import { RiDeleteBin6Line } from "react-icons/ri";

const StepThree = () => {
  const { values } = useFormikContext<any>();
  const { vaccins } = values;
  return (
    <div>
      <h1 className="text-base lg:text-2xl pb-5 font-medium text-main leading-none tracking-[0.02em]">
        Immunization Coverage
      </h1>
      <div className="space-y-4">
        <p className="">
          What is the immunization coverage for these vaccines?
        </p>
        <CustomInput
          isRequired={true}
          name={`vaccins.birthB`}
          type="number"
          label="12. Birth dose Hep B (Percentage%)"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`vaccins.penta1`}
          label="13. Penta 1 (Percentage%)"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`vaccins.penta3`}
          label="14. Penta 3 (Percentage%)"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`vaccins.MVC1MR1`}
          label="15. MCV1/MR1 (Percentage%)"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`vaccins.MVC2MR2`}
          label="16. MCV2/MR2 (Percentage%)"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`vaccins.Td2TTCV`}
          label="17. Td2+/TTCV (Percentage%)"
        />
        <span className="text-base lg:text-lg mt-2">
          18. Other vaccines (e.g HPV/IPV)
        </span>
        <FieldArray
          name="vaccins.otherVaccines"
          render={(arrayHelpers) => (
            <div className="space-y-6 pt-4 rounded-xl">
              {vaccins?.otherVaccines.map((_: any, index: number) => (
                <div
                  key={index}
                  className="p-4 space-y-2 border-main/50 border rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium text-gray-700 mb-2">
                      Vaccin {index + 1}
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
                    name={`vaccins?.otherVaccines[${index}].name`}
                    label="Name"
                  />

                  <CustomInput
                    isRequired={true}
                    type="number"
                    name={`vaccins?.otherVaccines[${index}].number`}
                    label="Number of cases (Percentage%)"
                  />
                </div>
              ))}

              <button
                type="button"
                className="px-6 py-3 text-sm rounded-xl bg-main text-white hover:bg-main/30"
                onClick={() =>
                  arrayHelpers.push({
                    name: "",
                    number: "",
                  })
                }
              >
                + Add Vaccin
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default StepThree;
