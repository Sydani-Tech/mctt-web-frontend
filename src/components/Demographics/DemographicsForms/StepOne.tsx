/* eslint-disable @typescript-eslint/no-explicit-any */
import YesNoField from "@/utils/YesOrNoField";
// import LocationSelector from "./LocationSelector";
import CustomInput from "@/utils/CustomInput";
import { newestLocation } from "@/utils/newestLocation";
import CustomSelect from "@/utils/CustomSelect";
import { useFormikContext } from "formik";
import { useAuth } from "@/components/context/AuthContext";

export default function StepOne() {
  const { values, setFieldValue } = useFormikContext<any>();
  const { user } = useAuth();
  const { community } = values;
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
      {/* <LocationSelector /> */}
      <div className="flex gap-2 flex-col">
        <label className="text-base lg:text-lg">
          Name of PHU/Vaccine store
        </label>
        <div className="w-full px-4 resize-none py-5  bg-main-gray/20 rounded-lg shadow-sm focus:ring-main focus:border-main">
          {user?.phu}
        </div>
      </div>
      <CustomSelect
        label="Community"
        placeholder="Select Community"
        name="community"
        value={community}
        onChange={(val) => setFieldValue("community", val)}
        options={communities}
        disabled={!phu}
      />

      <CustomInput
        isRequired={true}
        name="nameOfVillageHead"
        label="1. Name of village head"
      />

      <CustomInput
        isRequired={true}
        type="number"
        name="phoneNumber"
        label="2. Phone number of village head"
      />

      <CustomInput
        isRequired={true}
        name="identity"
        label="3. Identify and name any 'high risk communities' (e.g. access, poverty,
          religion, language, occupation, nomads)"
      />

      <CustomInput
        isRequired={true}
        name="healthWorker"
        label="4. Name of Community Health Worker"
      />

      <CustomInput
        isRequired={true}
        name="healthWorkerPhone"
        type="number"
        label="5. Phone number of Community Health Worker"
      />

      <YesNoField
        name="isFacilityAvailable"
        label="6. Is there a facility in this village?"
        isRequired={true}
      />
    </div>
  );
}
