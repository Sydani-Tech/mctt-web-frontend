/* eslint-disable react-refresh/only-export-components */
import type { SocialMappingForm } from "@/typings/social-mapping";
import { useState, useEffect, createContext, useContext } from "react";
import type { ReactNode } from "react";

interface RootCauseType {
  rootCauseData: SocialMappingForm[];
  setRootCause: React.Dispatch<React.SetStateAction<SocialMappingForm[]>>;
}

const RootCause = createContext<RootCauseType | undefined>(undefined);

export function useRootCause(): RootCauseType {
  const context = useContext(RootCause);
  if (!context) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
}

interface RootCauseProviderProps {
  children?: ReactNode;
}

export function RootCauseProvider({ children }: RootCauseProviderProps) {
  const [rootCauseData, setRootCause] = useState<SocialMappingForm[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("rootCauseData");
    if (storedData) {
      try {
        setRootCause(JSON.parse(storedData));
      } catch (error) {
        console.error("Failed to parse rootCauseData:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("rootCauseData", JSON.stringify(rootCauseData));
  }, [rootCauseData]);

  const value: RootCauseType = {
    rootCauseData,
    setRootCause,
  };

  return <RootCause.Provider value={value}>{children}</RootCause.Provider>;
}
