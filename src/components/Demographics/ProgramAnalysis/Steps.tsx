import CustomInput from "@/utils/CustomInput";

interface StepProps {
  title: string;
  prefix: string;
}

export function Step({ title, prefix }: StepProps) {
  return (
    <div>
      <h1 className="text-base lg:text-2xl pb-5 font-medium text-main leading-none tracking-[0.02em]">
        {title}
      </h1>
      <div className="space-y-4">
        <CustomInput
          isRequired
          name={`${prefix}Annual`}
          label="Annual Doses needed"
        />
        <CustomInput
          isRequired
          name={`${prefix}Monthly`}
          label="Monthly Syringes needed"
        />
        <CustomInput
          isRequired
          name={`${prefix}Total`}
          label="Annual Syringes needed"
        />
      </div>
    </div>
  );
}
