/* eslint-disable react-refresh/only-export-components */
import { useFacilities } from "@/hooks/hooks";
import type { ILocation } from "@/typings/app.types";
import { useState, useEffect, createContext, useContext } from "react";
import type { ReactNode } from "react";
type IFacility = {
  name: string;
  name_of_phu: string;
};
interface AppContextType {
  locationData: ILocation;
  setLocationData: React.Dispatch<React.SetStateAction<ILocation>>;
  // setFacilities: React.Dispatch<React.SetStateAction<IFacility[]>>;
  facilities: IFacility[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
}

interface AppProviderProps {
  children?: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [locationData, setLocationData] = useState<ILocation>({});
  const { data } = useFacilities();

  useEffect(() => {
    const storedData = localStorage.getItem("locationData");
    if (storedData) {
      try {
        setLocationData(JSON.parse(storedData));
      } catch (error) {
        console.error("Failed to parse locationData:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("locationData", JSON.stringify(locationData));
  }, [locationData]);

  const value: AppContextType = {
    locationData,
    setLocationData,
    facilities: data?.facilities || [],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
