/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomInput from "@/utils/CustomInput";
import CustomSelect from "@/utils/CustomSelect";
import { useFormikContext } from "formik";

const sessionTypes = [
  {
    label: "Fixed (F)",
    value: "Fixed (F)",
  },
  {
    label: "Outreach  (O)",
    value: "Outreach  (O)",
  },
  {
    label: "Mobile (M)",
    value: "Mobile (M)",
  },
];

export default function StepFive() {
  const { values, setFieldValue } = useFormikContext<any>();

  return (
    <div className="space-y-4">
      <CustomInput
        isRequired={true}
        name="otherMNCHInterventions"
        label="Other MNCH interventions"
      />

      <CustomSelect
        label="Fixed site (F), Outreach (O) or Mobile (M)"
        placeholder="Select Session type"
        value={values?.siteContact}
        name="siteContact"
        onChange={(val) => setFieldValue("siteContact", val)}
        options={sessionTypes}
      />
      {/* <CustomInput
        isRequired={true}
        name="siteContact"
        label="Fixed site (F), Outreach (O) or Mobile (M)"
      /> */}
    </div>
  );
}
