import CustomSelect from "@/utils/CustomSelect";
import { newestLocation } from "@/utils/newestLocation";
import { useFormikContext } from "formik";

interface LocationFormValues {
  region: string;
  district: string;
  chiefdom: string;
  phu: string;
}

const LocationSelector = () => {
  const { values, setFieldValue } = useFormikContext<LocationFormValues>();

  const { region, district, chiefdom, phu } = values;

  const regions = Object.keys(newestLocation).map((r) => ({
    label: r,
    value: r,
  }));

  const districts = region
    ? Object.keys(newestLocation[region]).map((d) => ({
        label: d,
        value: d,
      }))
    : [];

  const chiefdoms =
    region && district
      ? Object.keys(newestLocation[region][district]).map((c) => ({
          label: c,
          value: c,
        }))
      : [];

  const phus =
    region && district && chiefdom
      ? Object.keys(newestLocation[region][district][chiefdom]).map((p) => ({
          label: p,
          value: p,
        }))
      : [];

  return (
    <div className="space-y-4">
      <CustomSelect
        label="Region"
        name="region"
        placeholder="Select Region"
        value={region}
        onChange={(val) => {
          setFieldValue("region", val);
          setFieldValue("district", "");
          setFieldValue("chiefdom", "");
          setFieldValue("phu", "");
          setFieldValue("community", "");
        }}
        options={regions}
      />
      <CustomSelect
        name="district"
        label="District"
        placeholder="Select District"
        value={district}
        onChange={(val) => {
          setFieldValue("district", val);
          setFieldValue("chiefdom", "");
          setFieldValue("phu", "");
          setFieldValue("community", "");
        }}
        options={districts}
        disabled={!region}
      />
      <CustomSelect
        name="chiefdom"
        label="Chiefdom"
        placeholder="Select Chiefdom"
        value={chiefdom}
        onChange={(val) => {
          setFieldValue("chiefdom", val);
          setFieldValue("phu", "");
          setFieldValue("community", "");
        }}
        options={chiefdoms}
        disabled={!district}
      />
      <CustomSelect
        name="phu"
        label="Name of PHU/Vaccine store"
        placeholder="Select PHU"
        value={phu}
        onChange={(val) => {
          setFieldValue("phu", val);
          setFieldValue("community", "");
        }}
        options={phus}
        disabled={!chiefdom}
      />
    </div>
  );
};

export default LocationSelector;
