import CustomInput from "@/utils/CustomInput";

export default function StepTwo() {
  return (
    <div className="">
      <h1 className="text-base lg:text-2xl pb-5 font-medium text-main leading-none tracking-[0.02em]">
        1ml Syringes BCG for Dilution
      </h1>
      <div className="space-y-4">
        <CustomInput
          isRequired={true}
          name="annualDosesNeededForBCG"
          label="Annual Doses needed"
        />
        <CustomInput
          isRequired={true}
          name="monthlySyringesNeededForBCG"
          label="Monthly Syringes needed"
        />
        <CustomInput
          isRequired={true}
          name="annualSyringesNeededForBCG"
          label="Annual Syringes needed"
        />
      </div>
    </div>
  );
}
