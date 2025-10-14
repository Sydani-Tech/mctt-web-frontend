import CustomInput from "@/utils/CustomInput";

interface FieldConfig {
  name: string;
  label: string;
}

interface VaccineConfig {
  title: string;
  baseName: string;
  fields: FieldConfig[];
}

export function Step({ title, baseName, fields }: VaccineConfig) {
  return (
    <div>
      <h1 className="text-base lg:text-2xl pb-5 font-medium text-main leading-none tracking-[0.02em]">
        {title}
      </h1>

      <div className="space-y-4">
        {fields.map((field) => (
          <CustomInput
            key={field.name}
            isRequired
            type="number"
            name={`${baseName}.${field.name}`}
            label={field.label}
          />
        ))}
      </div>
    </div>
  );
}
