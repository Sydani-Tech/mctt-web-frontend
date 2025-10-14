/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomSelect from "@/utils/CustomSelect";
import YesNoField from "@/utils/YesOrNoField";
import { useFormikContext } from "formik";

const categories = [
  {
    label: "Category 1",
    value: "1",
  },
  {
    label: "Category 2",
    value: "2",
  },
  {
    label: "Category 3",
    value: "3",
  },
  {
    label: "Category 4",
    value: "4",
  },
];
const ratings = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "4",
    value: "4",
  },
];
const StepSix = () => {
  const { values, setFieldValue } = useFormikContext<any>();
  const {
    rating,
    category,
    problemsRelatingToAccess,
    problemsRelatingToUtilization,
  } = values;

  return (
    <div>
      <h1 className="text-base lg:text-2xl pb-5 font-medium text-main leading-none tracking-[0.02em]">
        Problems Identified
      </h1>
      <div className="space-y-4">
        <YesNoField
          name="problemsRelatingToAccess"
          label="30. Are there problems relating to access? (Should be a classified as a problem if penta 1-3 dropout rate>=10% and penta 1 coverage <85%)"
          isRequired={true}
          fixedValue={problemsRelatingToAccess}
        />
        <YesNoField
          name="problemsRelatingToUtilization"
          label="31. Are there problems relating to utilization? (Should be a classified as a problem if penta 1-3 dropout rate>=10% and penta 1 coverage <85%)"
          isRequired={true}
          fixedValue={problemsRelatingToUtilization}
        />

        <CustomSelect
          label="32. Select Category"
          placeholder="Category"
          value={category}
          name="category"
          onChange={(val) => setFieldValue("category", val)}
          options={categories}
        />

        <YesNoField
          name="areThereSignificantVpds"
          label="33. Are there significant numbers of VPDs?"
          isRequired={true}
        />
        <YesNoField
          name="areThereSignificantRiskPopulation"
          label="34. Are there significant numbers of high risk population?"
          isRequired={true}
        />
        <YesNoField
          name="areThereSignificantUnimmunized"
          label="35. Are there significant numbers of unimmunized?"
          isRequired={true}
        />

        <CustomSelect
          label="36. Prioritization of area/ranking"
          placeholder="Select Rating"
          value={rating}
          name="rating"
          onChange={(val) => setFieldValue("rating", val)}
          options={ratings}
        />
      </div>
    </div>
  );
};

export default StepSix;
