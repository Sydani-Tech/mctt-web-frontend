/* eslint-disable @typescript-eslint/no-explicit-any */
// import LocationSelector from "./LocationSelector";
import CustomInput from "@/utils/CustomInput";
// import { newestLocation } from "@/utils/newestLocation";
import CustomSelect from "@/utils/CustomSelect";
import { useFormikContext } from "formik";
import { useApp } from "@/components/context/AppContext";

const ownerships = [
  { label: "Faith-Based", value: "Faith-Based" },
  { label: "Government", value: "Government" },
  { label: "NGO", value: "NGO" },
  { label: "Private", value: "Private" },
];
const states = [
  { label: "Functional", value: "Functional" },
  { label: "Non-Functional", value: "Non-Functional" },
];

const facilityTypes = [
  { label: "CHP", value: "CHP" },
  { label: "Hospital", value: "Hospital" },
  { label: "MCHP", value: "MCHP" },
];

export default function StepOne() {
  const { values, setFieldValue } = useFormikContext<any>();
  const { facilities } = useApp();

  const { name, ownership, state_of_the_health_facility, type_of_facility } =
    values;
  // const { region, district, chiefdom, phu } = user ?? {};
  const facilt =
    facilities &&
    facilities.map((fac) => {
      return { label: fac.name, value: fac.name };
    });
  // console.log(facilt);
  // const communities =
  //   region && district && chiefdom && phu
  //     ? newestLocation[region][district][chiefdom][phu].map((com) => ({
  //         label: com,
  //         value: com,
  //       }))
  //     : [];
  return (
    <div className="space-y-4">
      {/* <LocationSelector /> */}
      {/* <div className="flex gap-2 flex-col">
        <label className="text-base lg:text-lg">
          Name of PHU/Vaccine store
        </label>
        <div className="w-full px-4 resize-none py-5  bg-main-gray/20 rounded-lg shadow-sm focus:ring-main focus:border-main">
          {user?.phu}
        </div>
      </div> */}
      <CustomSelect
        label="Health facility"
        placeholder="Select Facility"
        name="name"
        className="capitalize"
        value={name}
        onChange={(val) => setFieldValue("name", val)}
        options={facilt}
        // disabled={!phu}
      />

      <CustomSelect
        label="1. State of the health facility"
        placeholder="Select state"
        name="state_of_the_health_facility"
        value={state_of_the_health_facility}
        onChange={(val) => setFieldValue("state_of_the_health_facility", val)}
        options={states}
        // disabled={!phu}
      />

      <CustomSelect
        label="2. Ownership"
        placeholder="Select type of ownership"
        name="ownership"
        value={ownership}
        onChange={(val) => setFieldValue("ownership", val)}
        options={ownerships}
        // disabled={!phu}
      />

      <CustomSelect
        label="3. Type of facility"
        placeholder="Select type of facility"
        name="type_of_facility"
        value={type_of_facility}
        onChange={(val) => setFieldValue("type_of_facility", val)}
        options={facilityTypes}
        // disabled={!phu}
      />

      {/* <CustomInput
        isRequired={true}
        type="text"
        name="name"
        label="1. Name of Vaccination Center"
      /> */}

      <CustomInput
        isRequired={true}
        type="number"
        name="no_of_children_vaccinated"
        label="4. Number of Children Vaccinated"
      />

      <CustomInput
        isRequired={true}
        type="number"
        name="no_of_fixed_sessions_conducted"
        label="5. Number of Fixed Sessions Conducted"
      />

      <CustomInput
        isRequired={true}
        type="number"
        name="no_of_outreach_sessions_conducted"
        label="6. Number of Outreach Sessions Conducted"
      />

      <CustomInput
        isRequired={true}
        type="number"
        name="no_of_teams_deployed"
        label="7. Number of Teams Deployed"
      />

      <CustomInput
        isRequired={true}
        type="number"
        name="no_of_vaccinators"
        label="8. Number of Vaccinators"
      />

      <CustomInput
        isRequired={true}
        type="number"
        name="how_many_household_members_are_above_18"
        label="9. How Many Household Members Are Above 18"
      />

      <CustomInput
        isRequired={true}
        type="number"
        name="no_of_campaigns_conducted"
        label="10. Number of Campaigns Conducted"
      />

      <CustomInput
        isRequired={true}
        type="number"
        name="no_of_supervisory_visits_conducted"
        label="11. Number of Supervisory Visits Conducted"
      />

      <CustomInput
        isRequired={true}
        type="number"
        name="no_of_cold_chain_equipment"
        label="12. Number of Cold Chain Equipment"
      />

      <CustomInput
        isRequired={true}
        type="number"
        name="no_of_vaccines_requested"
        label="13. Number of Vaccines Requested"
      />

      <CustomInput
        isRequired={true}
        type="number"
        name="no_of_vaccines_supplied"
        label="14. Number of Vaccines Supplied"
      />

      <CustomInput
        isRequired={true}
        type="number"
        name="no_of_vaccines_utilized"
        label="15. Number of Vaccines Utilized"
      />

      {/* <CustomInput
        isRequired={true}
        name="Ownership"
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
      /> */}
    </div>
  );
}
