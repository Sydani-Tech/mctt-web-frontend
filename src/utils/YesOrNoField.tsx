import { Field, ErrorMessage } from "formik";

export default function YesNoField({
  name,
  label,
  isRequired,
  fixedValue,
}: {
  name: string;
  label: string;
  isRequired: boolean;
  fixedValue?: "yes" | "no";
}) {
  return (
    <div className="mb-6">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>

      <div className="flex gap-6">
        {/* Yes option */}
        <label className="flex items-center gap-2 cursor-pointer">
          <Field
            type="radio"
            name={name}
            value="yes"
            disabled={!!fixedValue}
            {...(fixedValue ? { checked: fixedValue === "yes" } : {})}
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span>Yes</span>
        </label>

        {/* No option */}
        <label className="flex items-center gap-2 cursor-pointer">
          <Field
            type="radio"
            name={name}
            value="no"
            disabled={!!fixedValue}
            {...(fixedValue ? { checked: fixedValue === "no" } : {})}
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span>No</span>
        </label>
      </div>

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}
