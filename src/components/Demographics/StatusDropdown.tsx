import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropdownIcon from "../../assets/arrow-filled.svg";

const statuses = ["all", "pending", "approved", "rejected"];

interface StatusData {
  filter: string;
  setFilter: (status: string) => void;
}
export function StatusDropdown({ filter, setFilter }: StatusData) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <div className="flex flex-row items-center">
            <span className="text-nowrap">
              {filter === "all"
                ? "All Status"
                : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </span>
            <img src={DropdownIcon} alt="" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32" align="start">
        {statuses.map((status) => (
          <DropdownMenuItem
            key={status}
            onClick={() => setFilter(status)}
            className="capitalize"
          >
            {status}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
