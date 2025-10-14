/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormikContext } from "formik";
import CustomSelect from "@/utils/CustomSelect";
import YesNoField from "@/utils/YesOrNoField";

export default function StepFive() {
  const { values, setFieldValue } = useFormikContext<any>();
  // const handleGetLocation = () => {
  //   if (!navigator.geolocation) {
  //     setLocationError("Geolocation is not supported by your browser.");
  //     return;
  //   }

  //   setLocationError(null); // Clear previous errors

  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       const coordinates = `${latitude},${longitude}`;
  //       setFieldValue("geoCoordinates", coordinates); // Update Formik field
  //     },
  //     (error) => {
  //       switch (error.code) {
  //         case error.PERMISSION_DENIED:
  //           setLocationError("Permission to access location was denied.");
  //           break;
  //         case error.POSITION_UNAVAILABLE:
  //           setLocationError("Location information is unavailable.");
  //           break;
  //         case error.TIMEOUT:
  //           setLocationError("The request to get location timed out.");
  //           break;
  //         default:
  //           setLocationError("An unknown error occurred.");
  //           break;
  //       }
  //     },
  //     {
  //       enableHighAccuracy: true, // Optional: Request high accuracy
  //       timeout: 10000, // Optional: Set timeout (10 seconds)
  //       maximumAge: 0, // Optional: No cached position
  //     }
  //   );
  // };

  return (
    <div className="space-y-4">
      <YesNoField
        name="hadVpd"
        label="16. Has any of your child had a vaccine preventable disease in the last 12 months?"
        isRequired
      />

      {values.hadVpd === "yes" && (
        <CustomSelect
          label="17. If yes, which?"
          name="vpdType"
          placeholder=""
          options={[
            { value: "Measles", label: "Measles" },
            { value: "Rubella", label: "Rubella (German measles)" },
            { value: "Polio", label: "Polio" },
            { value: "Diphtheria", label: "Diphtheria" },
            { value: "Tetanus", label: "Tetanus" },
            { value: "Pertussis", label: "Pertussis (whooping cough)" },
            { value: "Hib", label: "Haemophilus influenzae type b (Hib)" },
            { value: "HepB", label: "Hepatitis B" },
            { value: "Tuberculosis", label: "Tuberculosis" },
            { value: "Rotavirus", label: "Rotavirus" },
            { value: "Yellow fever", label: "Yellow fever" },
            { value: "Pneumococcal", label: "Pneumococcal diseases" },
          ]}
          value={values.vpdType}
          onChange={(val) => setFieldValue("vpdType", val)}
        />
      )}
    </div>
  );
}
