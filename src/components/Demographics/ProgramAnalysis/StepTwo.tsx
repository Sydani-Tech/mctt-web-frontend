/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomInput from "@/utils/CustomInput";
import { FieldArray, useFormikContext } from "formik";
import { RiDeleteBin6Line } from "react-icons/ri";

const StepTwo = () => {
  const { values } = useFormikContext<any>();
  const { dosesAdministered } = values;
  return (
    <div>
      <h1 className="text-base lg:text-2xl pb-5 font-medium text-main leading-none tracking-[0.02em]">
        Doses of vaccine Administered
      </h1>
      <div className="space-y-4">
        <p className="">
          What number of doses administered for the following vaccines in the
          previous year?
        </p>
        <CustomInput
          isRequired={true}
          name={`dosesAdministered.birthB`}
          type="number"
          label="5. Birth dose Hep B"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`dosesAdministered.penta1`}
          label="6. Penta 1"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`dosesAdministered.penta3`}
          label="7. Penta 3"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`dosesAdministered.MVC1MR1`}
          label="8. MCV1/MR1"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`dosesAdministered.MVC2MR2`}
          label="9. MCV2/MR2"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`dosesAdministered.Td2TTCV`}
          label="10. Td2+/TTCV"
        />
        <span className="text-base lg:text-lg mt-2">
          11. Other vaccines (e.g HPV/IPV)
        </span>
        <FieldArray
          name="dosesAdministered.otherVaccines"
          render={(arrayHelpers) => (
            <div className="space-y-6 pt-4 rounded-xl">
              {dosesAdministered?.otherVaccines.map((_: any, index: number) => (
                <div
                  key={index}
                  className="p-4 space-y-2 border-main/50 border rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium text-gray-700 mb-2">
                      Dose {index + 1}
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
                    name={`dosesAdministered.otherVaccines[${index}].name`}
                    label="Name"
                  />

                  <CustomInput
                    isRequired={true}
                    type="number"
                    name={`dosesAdministered.otherVaccines[${index}].number`}
                    label="Number of cases"
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
                + Add Dose
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default StepTwo;
