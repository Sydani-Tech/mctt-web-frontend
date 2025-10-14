/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomInput from "@/utils/CustomInput";
import { FieldArray, useFormikContext } from "formik";
import { RiDeleteBin6Line } from "react-icons/ri";

const StepFour = () => {
  const { values } = useFormikContext<any>();
  const { unImmunized } = values;
  return (
    <div>
      <h1 className="text-base lg:text-2xl pb-5 font-medium text-main leading-none tracking-[0.02em]">
        Un - immunized children / women
      </h1>
      <div className="space-y-4">
        <p className="">
          What number of un-immunized children/women for the following vaccines
          in the previous year?
        </p>
        <CustomInput
          isRequired={true}
          name={`unImmunized.birthB`}
          type="number"
          label="19. Birth dose Hep B"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`unImmunized.penta1`}
          label="20. Penta 1"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`unImmunized.penta3`}
          label="21. Penta 3"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`unImmunized.MVC1MR1`}
          label="22. MCV1/MR1"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`unImmunized.MVC2MR2`}
          label="23. MCV2/MR2"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`unImmunized.Td2TTCV`}
          label="24. Td2+/TTCV"
        />
        <span className="text-base lg:text-lg mt-2">
          25. Other vaccines (e.g HPV/IPV)
        </span>
        <FieldArray
          name="unImmunized.otherVaccines"
          render={(arrayHelpers) => (
            <div className="space-y-6 pt-4 rounded-xl">
              {unImmunized?.otherVaccines.map((_: any, index: number) => (
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
                    name={`unImmunized?.otherVaccines[${index}].name`}
                    label="Name"
                  />

                  <CustomInput
                    isRequired={true}
                    type="number"
                    name={`unImmunized?.otherVaccines[${index}].number`}
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
                + Add
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default StepFour;
