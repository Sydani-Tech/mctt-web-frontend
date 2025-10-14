import { ErrorMessage, Field } from "formik";

const CustomInput = ({
  name,
  label,
  isRequired,
  type = "text",
  as = "input",
  rows,
  cols,
  description = "",
  fixedValue,
  placeholder = "",
}: {
  name: string;
  label: string;
  isRequired: boolean;
  type?: "number" | "text" | "tel" | "date" | "time" | "password";
  as?: "input" | "select" | "textarea";
  rows?: number;
  cols?: number;
  description?: string;
  fixedValue?: string | number;
  placeholder?: string;
}) => {
  const isFixed = fixedValue !== undefined && fixedValue !== null;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-0.5">
        <label className="text-base lg:text-lg">
          {label} {isRequired && <span className="text-[#FF0000]">*</span>}
        </label>
        {description && (
          <span className="text-sm text-gray-500">{description}</span>
        )}
      </div>

      <Field
        name={name}
        type={type}
        as={as}
        placeholder={placeholder}
        rows={as === "textarea" ? rows : undefined}
        cols={as === "textarea" ? cols : undefined}
        className={`w-full px-4 resize-none py-5 border-main/50 border bg-main-gray/5 rounded-lg shadow-sm focus:ring-main focus:border-main ${
          isFixed ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
        max={
          type === "date" && name.toLowerCase().includes("dob")
            ? new Date(new Date().setDate(new Date().getDate() - 1))
                .toISOString()
                .split("T")[0]
            : undefined
        }
        value={isFixed ? fixedValue : undefined}
        disabled={isFixed}
        readOnly={isFixed}
        onWheel={(e: React.WheelEvent<HTMLInputElement>) =>
          !isFixed && e.currentTarget.blur()
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (
            !isFixed &&
            type === "number" &&
            (e.key === "ArrowUp" || e.key === "ArrowDown")
          ) {
            e.preventDefault();
          }
        }}
      />

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default CustomInput;
