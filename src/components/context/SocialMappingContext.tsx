/* eslint-disable react-refresh/only-export-components */
import type { SocialMappingForm } from "@/typings/social-mapping";
import { useState, useEffect, createContext, useContext } from "react";
import type { ReactNode } from "react";

interface SocialContextType {
  socialMapData: SocialMappingForm[];
  setSocialMapData: React.Dispatch<React.SetStateAction<SocialMappingForm[]>>;
}

const SocialContext = createContext<SocialContextType | undefined>(undefined);

export function useSocial(): SocialContextType {
  const context = useContext(SocialContext);
  if (!context) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
}

interface SocialProviderProps {
  children?: ReactNode;
}

export function SocialProvider({ children }: SocialProviderProps) {
  const [socialMapData, setSocialMapData] = useState<SocialMappingForm[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("socialMapData");
    if (storedData) {
      try {
        setSocialMapData(JSON.parse(storedData));
      } catch (error) {
        console.error("Failed to parse SocialMapData:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("socialMapData", JSON.stringify(socialMapData));
  }, [socialMapData]);

  const value: SocialContextType = {
    socialMapData,
    setSocialMapData,
  };

  return (
    <SocialContext.Provider value={value}>{children}</SocialContext.Provider>
  );
}
