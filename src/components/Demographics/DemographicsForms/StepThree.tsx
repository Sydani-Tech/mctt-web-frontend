import CustomInput from "@/utils/CustomInput";

export default function StepThree() {
  return (
    <div className="space-y-4">
      <CustomInput
        isRequired={true}
        name="totalPopulation"
        label="Total population of the village"
        type="number"
      />
    </div>
  );
}
