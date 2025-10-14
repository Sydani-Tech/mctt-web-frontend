/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormikContext, FieldArray } from "formik";
import { RiDeleteBin6Line } from "react-icons/ri";
import CustomInput from "@/utils/CustomInput";
import YesNoField from "@/utils/YesOrNoField";

export default function StepFour() {
  const { values } = useFormikContext<any>();

  return (
    <div className="space-y-6 rounded-xl">
      <YesNoField
        name="hasPregnantWomen"
        label="14. Are there any pregnant women in the household?"
        isRequired
      />

      {values.hasPregnantWomen === "yes" && (
        <div className="space-y-6">
          {/* <CustomInput
            name="pregnantWomenCount"
            type="number"
            label="23. How many pregnant women are in the household?"
            placeholder="Enter number of pregnant women"
            isRequired
          /> */}
          <FieldArray name="pregnantWomen">
            {({ push, remove }) => (
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-700">
                  15 Pregnant Women Details
                </h3>
                {values.pregnantWomen.map((_: any, index: number) => (
                  <div
                    key={index}
                    className="p-6 space-y-4 bg-white border border-gray-200 rounded-xl"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-medium text-gray-600">
                        Pregnant Woman {index + 1}
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
                      isRequired
                      name={`pregnantWomen[${index}].fullName`}
                      label="First Name of this Pregnant Woman"
                      placeholder="Enter first name"
                    />
                    <CustomInput
                      isRequired
                      name={`pregnantWomen[${index}].dob`}
                      type="date"
                      label="Date of birth Pregnant Woman"
                      placeholder="Enter age"
                    />
                    <YesNoField
                      isRequired
                      name={`pregnantWomen[${index}].ttTaken`}
                      label="Has this pregnant woman taken TT/Td?"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    push({
                      firstName: "",
                      surname: "",
                      age: "",
                      ttTaken: "",
                    })
                  }
                  className="px-6 py-3 text-sm rounded-xl bg-main text-white hover:bg-main/30"
                  // className="px-6 py-3 text-sm rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
                >
                  + Add Pregnant Woman
                </button>
              </div>
            )}
          </FieldArray>
        </div>
      )}
    </div>
  );
}
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useFormikContext } from "formik";
// import CustomInput from "@/utils/CustomInput";
// import YesNoField from "@/utils/YesOrNoField";

// export default function StepFour() {
//   const { values } = useFormikContext<any>();
//   console.log(values);
//   return (
//     <div className="space-y-4">
//       <YesNoField
//         name="hasPregnantWomen"
//         label="22. Are there pregnant women in the household?"
//         isRequired
//       />

//       {values.hasPregnantWomen === "yes" && (
//         <>
//           <CustomInput
//             name="pregnantWomenCount"
//             type="number"
//             label="23. How many pregnant women?"
//             isRequired
//           />
//           <YesNoField
//             name="ttTaken"
//             isRequired
//             label="24. Has the pregnant woman taken TT/Td?"
//           />
//           <CustomInput
//             isRequired
//             name="womanFirstName"
//             label="25. First name of woman"
//           />
//           <CustomInput
//             isRequired
//             name="womanSurname"
//             label="26. Surname of woman"
//           />
//           <CustomInput
//             isRequired
//             name="womanAge"
//             type="number"
//             label="27. Age of woman"
//           />
//         </>
//       )}
//     </div>
//   );
// }
