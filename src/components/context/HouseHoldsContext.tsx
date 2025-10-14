/* eslint-disable react-refresh/only-export-components */
import type { HouseholdData } from "@/typings/house-hold";
import { useState, useEffect, createContext, useContext } from "react";
import type { ReactNode } from "react";

interface HouseHoldsType {
  houseHolds: HouseholdData[];
  setHouseHolds: React.Dispatch<React.SetStateAction<HouseholdData[]>>;
}

const HouseHolds = createContext<HouseHoldsType | undefined>(undefined);

export function useHouseHolds(): HouseHoldsType {
  const context = useContext(HouseHolds);
  if (!context) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
}

interface HouseHoldsProviderProps {
  children?: ReactNode;
}

export function HouseHoldsProvider({ children }: HouseHoldsProviderProps) {
  const [houseHolds, setHouseHolds] = useState<HouseholdData[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("houseHolds");
    if (storedData) {
      try {
        setHouseHolds(JSON.parse(storedData));
      } catch (error) {
        console.error("Failed to parse houseHolds:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("houseHolds", JSON.stringify(houseHolds));
  }, [houseHolds]);

  const value: HouseHoldsType = {
    houseHolds,
    setHouseHolds,
  };

  return <HouseHolds.Provider value={value}>{children}</HouseHolds.Provider>;
}
