/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormikContext } from "formik";
import CustomInput from "@/utils/CustomInput";
import CustomSelect from "@/utils/CustomSelect";
import { newestLocation } from "@/utils/newestLocation";
import { useAuth } from "@/components/context/AuthContext";

export default function StepOne() {
  const { values, setFieldValue } = useFormikContext<any>();
  const { community } = values;
  const { user } = useAuth();

  const { region, district, chiefdom, phu } = user ?? {};
  const communities =
    region && district && chiefdom && phu
      ? newestLocation[region][district][chiefdom][phu].map((com) => ({
          label: com,
          value: com,
        }))
      : [];

  return (
    <div className="space-y-4">
      <CustomInput
        name="enumeratorName"
        label="1. Name of Enumerator"
        isRequired
        fixedValue={user?.fullName}
      />
      {/* <CustomInput
        name="phoneNumber"
        type="tel"
        label="2. Phone Number"
        isRequired
        fixedValue={user?.phoneNumber}
      /> */}
      {/* <CustomInput
        name="dateOfVisit"
        type="date"
        label="3. Date of Visit"
        isRequired
      /> */}
      {/* <CustomInput
        name="timeOfVisit"
        type="time"
        label="4. Time of Visit"
        isRequired
      /> */}

      <CustomSelect
        label="2. Community"
        placeholder="Select Community"
        name="community"
        value={community}
        onChange={(val) => setFieldValue("community", val)}
        options={communities}
        disabled={!phu}
      />

      <CustomInput
        name="villageHeadName"
        label="3. What is the name of the village head?"
        isRequired
      />
    </div>
  );
}
