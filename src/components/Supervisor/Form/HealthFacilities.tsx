import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ErrorMessage } from "formik";

type HealthFacilitySelectProps = {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
};

const HealthFacilitySelect = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  options,
}: HealthFacilitySelectProps) => {
  // const [search, setSearch] = useState("");

  // const filteredOptions = options.filter((opt) =>
  //   opt.label.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="flex flex-col gap-2">
      <label className="text-base lg:text-lg">
        {label} <span className="text-[#FF0000]">*</span>
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="max-h-60 overflow-y-auto">
          {/* Sticky search bar */}
          {/* <div className="sticky top-0 z-50 bg-main/5 p-2">
            <input
              type="text"
              placeholder="Search facility..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none rounded px-2 py-1 text-sm"
            />
          </div> */}

          <SelectGroup>
            {options.length > 0 ? (
              options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))
            ) : (
              <div className="p-2 text-sm text-gray-500">No results found</div>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default HealthFacilitySelect;
