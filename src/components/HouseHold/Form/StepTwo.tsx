/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormikContext } from "formik";
import CustomInput from "@/utils/CustomInput";
import YesNoField from "@/utils/YesOrNoField";
import { useState } from "react";

export default function StepTwo() {
  const { values, setFieldValue } = useFormikContext<any>();
  const [locationError, setLocationError] = useState<string | null>(null);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }

    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const coordinates = { latitude, longitude };

        setFieldValue("geoCoordinates", coordinates);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Permission to access location was denied.");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            setLocationError("The request to get location timed out.");
            break;
          default:
            setLocationError("An unknown error occurred.");
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };
  return (
    <div className="space-y-4">
      <CustomInput name="houseAddress" label="4. House address" isRequired />

      <YesNoField
        name="isHouseNumbered"
        label="5. Is the house numbered?"
        isRequired
      />

      {values.isHouseNumbered === "yes" && (
        <CustomInput name="houseNumber" label="6. House number" isRequired />
      )}
      <div className="flex flex-col space-y-2">
        <CustomInput
          name="geoCoordinates"
          label="7. Geolocation Coordinates"
          fixedValue={
            values.geoCoordinates
              ? `${values.geoCoordinates.latitude}, ${values.geoCoordinates.longitude}`
              : ""
          }
          isRequired
          placeholder="Click button to capture coordinates"
        />
        <button
          type="button"
          onClick={handleGetLocation}
          className="px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:bg-main/80 transition duration-300"
        >
          Get Location
        </button>
        {locationError && (
          <div className="text-red-500 text-sm">{locationError}</div>
        )}
      </div>

      {/* <CustomInput
        name="householdSize"
        type="number"
        label="How many people are in this household?"
        isRequired
      /> */}

      <CustomInput
        name="householdHeadName"
        label="8. First name and surname of the head of household"
        isRequired
      />

      <CustomInput
        name="householdHeadDob"
        type="date"
        label="9. Date of birth of head of household"
        isRequired
      />

      <CustomInput
        name="motherName"
        label="10. First name and surname of the Mother"
        isRequired
      />

      <CustomInput
        name="motherDob"
        type="date"
        label="11. Mother's date of birth"
        isRequired
      />
    </div>
  );
}
