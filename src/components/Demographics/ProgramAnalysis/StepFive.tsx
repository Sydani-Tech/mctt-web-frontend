import CustomInput from "@/utils/CustomInput";

const StepFive = () => {
  return (
    <div>
      <h1 className="text-base lg:text-2xl pb-5 font-medium text-main leading-none tracking-[0.02em]">
        Drop-out rate (%)
      </h1>
      <div className="space-y-4">
        <p className="">
          What is the drop-out rate for the following vaccines in the previous
          year?
        </p>

        <CustomInput
          isRequired={true}
          type="number"
          name={`dropOutRate.penta1`}
          label="26. Penta 1 (Percentage%)"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`dropOutRate.penta3`}
          label="27. Penta 3 (Percentage%)"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`dropOutRate.MVC1`}
          label="28. MCV1 (Percentage%)"
        />
        <CustomInput
          isRequired={true}
          type="number"
          name={`dropOutRate.MVC2`}
          label="29. MCV2 (Percentage%)"
        />
      </div>
    </div>
  );
};

export default StepFive;
