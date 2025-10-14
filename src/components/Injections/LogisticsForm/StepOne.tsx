import CustomInput from "@/utils/CustomInput";
import { Field, ErrorMessage } from "formik";

interface StepTwoProps {
  title: string;
  namePrefix: string;
}

export default function StepOne({ title, namePrefix }: StepTwoProps) {
  return (
    <div>
      <h1 className="text-base lg:text-2xl pb-5 font-medium text-main leading-none tracking-[0.02em]">
        {title}
      </h1>

      <div className="space-y-4">
        <CustomInput
          isRequired={true}
          name={`${namePrefix}.annualDosesNeeded`}
          label="Annual Syringes needed"
          type="number"
        />
        <CustomInput
          isRequired={true}
          name={`${namePrefix}.monthlySyringesNeeded`}
          label="Monthly Syringes needed"
          type="number"
        />
        <CustomInput
          isRequired={true}
          name={`${namePrefix}.annualSyringesNeeded`}
          label="Annual Syringes needed"
          type="number"
        />
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Annual Doses needed
          </label>
          <Field
            type="number"
            name={`${namePrefix}.annualDosesNeeded`}
            className="w-full rounded-md border border-gray-300 p-2"
          />
          <ErrorMessage
            name={`${namePrefix}.annualDosesNeeded`}
            component="p"
            className="text-red-500 text-sm"
          />
        </div>
      </div>
    </div>
  );
}

// import CustomInput from "@/utils/CustomInput";

// export default function StepOne() {
//   return (
//     <div className="">
//       <h1 className="text-base lg:text-2xl pb-5 font-medium text-main leading-none tracking-[0.02em]">
//         0.05mls AD syringes for BCG
//       </h1>
//       <div className="space-y-4">
//         <CustomInput
//           isRequired={true}
//           name="annualDosesNeeded"
//           label="Annual Doses needed"
//         />
//         <CustomInput
//           isRequired={true}
//           name="monthlySyringesNeeded"
//           label="Monthly Syringes needed *"
//         />
//         <CustomInput
//           isRequired={true}
//           name="annualSyringesNeeded"
//           label="Annual Syringes needed"
//         />
//       </div>
//     </div>
//   );
// }
