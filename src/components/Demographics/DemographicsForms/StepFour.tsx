/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomInput from "@/utils/CustomInput";
import { useFormikContext } from "formik";

export default function StepFour() {
  const { values } = useFormikContext<any>();

  const {
    numberOfBirths,
    survivingInfants,
    hpvTarget,
    womenOfChildBearingAge,
    pregnantWomen,
    ["12To23Months"]: twelveToTwentyThreeMonths,
    ["24To59Months"]: twentyFourMonths,
  } = values;
  return (
    <div className="space-y-4">
      <CustomInput
        isRequired={true}
        name="numberOfBirths"
        label="Number of live births (4%)"
        type="number"
        fixedValue={numberOfBirths}
      />
      <CustomInput
        isRequired={true}
        name="survivingInfants"
        label="Surviving infants (3.6%)"
        fixedValue={survivingInfants}
        type="number"
      />
      <CustomInput
        isRequired={true}
        type="number"
        name="12To23Months"
        fixedValue={twelveToTwentyThreeMonths}
        label="12-23 months (3.425%)"
      />
      <CustomInput
        isRequired={true}
        type="number"
        fixedValue={twentyFourMonths}
        name="24To59Months"
        label="24-59 months (13.7%)"
      />
      <CustomInput
        isRequired={true}
        name="pregnantWomen"
        type="number"
        label="Pregnant Women (4.4%)"
        fixedValue={pregnantWomen}
      />
      <CustomInput
        isRequired={true}
        type="number"
        name="womenOfChildBearingAge"
        label="Women of child bearing age (22.2%)"
        fixedValue={womenOfChildBearingAge}
      />
      <CustomInput
        isRequired={true}
        type="number"
        name="hpvTarget"
        label="HPV target (2%)"
        fixedValue={hpvTarget}
      />
    </div>
  );
}
