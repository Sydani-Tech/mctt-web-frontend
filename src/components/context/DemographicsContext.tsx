/* eslint-disable react-refresh/only-export-components */
import type { DemographicData } from "@/typings/demographics";
import { useState, useEffect, createContext, useContext } from "react";
import type { ReactNode } from "react";

interface DemoContextType {
  demographicData: DemographicData[];
  setDemographicData: React.Dispatch<React.SetStateAction<DemographicData[]>>;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function useDemo(): DemoContextType {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
}

interface DemoProviderProps {
  children?: ReactNode;
}

export function DemoProvider({ children }: DemoProviderProps) {
  const [demographicData, setDemographicData] = useState<DemographicData[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("demographicData");
    if (storedData) {
      try {
        setDemographicData(JSON.parse(storedData));
      } catch (error) {
        console.error("Failed to parse demographicData:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("demographicData", JSON.stringify(demographicData));
  }, [demographicData]);

  const value: DemoContextType = {
    demographicData,
    setDemographicData,
  };

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}
