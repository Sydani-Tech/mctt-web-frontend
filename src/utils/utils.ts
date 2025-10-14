/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { syringeSteps } from "@/components/Injections/LogisticsForm/syringeSteps";
import type { HouseholdData } from "@/typings/house-hold";

import type { FormikTouched, FormikErrors } from "formik";
import { newestLocation } from "./newestLocation";

export const getInitialValues = () => {
  return syringeSteps.reduce((acc, step) => {
    acc[`${step.prefix}Annual`] = "";
    acc[`${step.prefix}Monthly`] = "";
    acc[`${step.prefix}Total`] = "";
    return acc;
  }, {} as Record<string, string>);
};

type PopulationBreakdown = {
  liveBirths: number;
  survivingInfants: number;
  children12_23Months: number;
  children25_59Months: number;
  pregnantWomen: number;
  womenOfChildBearingAge: number;
  hpvTarget: number;
};

export function getPopulationBreakdown(
  totalAmount: number
): PopulationBreakdown {
  return {
    liveBirths: Math.round(totalAmount * 0.04), // 4%
    survivingInfants: Math.round(totalAmount * 0.036), // 3.6%
    children12_23Months: Math.round(totalAmount * 0.03425), // 3.425%
    children25_59Months: Math.round(totalAmount * 0.137), // 13.7%
    pregnantWomen: Math.round(totalAmount * 0.044), // 4.4%
    womenOfChildBearingAge: Math.round(totalAmount * 0.222), // 22.2%
    hpvTarget: Math.round(totalAmount * 0.02), // 2%
  };
}

export function markNestedTouched<T>(
  errors: FormikErrors<T>
): FormikTouched<T> {
  const touched: any = {};

  const recursive = (errObj: any, touchObj: any) => {
    Object.keys(errObj).forEach((key) => {
      if (typeof errObj[key] === "string") {
        touchObj[key] = true;
      } else if (typeof errObj[key] === "object" && errObj[key] !== null) {
        touchObj[key] = {};
        recursive(errObj[key], touchObj[key]);
      }
    });
  };

  recursive(errors, touched);
  return touched;
}

export const calculateAgeInYears = (dob: string) => {
  if (!dob) return null; // no DOB provided
  const birthDate = new Date(dob);

  // check if valid date
  if (isNaN(birthDate.getTime())) return null;

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export function getHouseholdSize(household: HouseholdData): number {
  let total = 0;

  // Count household head (always 1 if name exists)
  if (household?.householdHeadName) {
    total += 1;
  }

  // Count mother (only if name is provided)
  if (household?.motherName && household?.motherName.trim() !== "") {
    total += 1;
  }

  // Count children (valid entries with at least a name)
  if (Array.isArray(household?.children)) {
    total += household?.children.filter(
      (child) => child?.fullName && child?.fullName.trim() !== ""
    ).length;
  }

  // Count pregnant women (valid entries with a name or first/surname)
  if (Array.isArray(household?.pregnantWomen)) {
    total += household?.pregnantWomen.filter(
      (woman) => woman?.fullName && woman?.fullName.trim() !== ""
      // (woman.firstName && woman.firstName.trim() !== "") ||
      // (woman.surname && woman.surname.trim() !== "")
    ).length;
  }

  return total;
}

export const getAllPHUOptions = (): { label: string; value: string }[] => {
  const options: { label: string; value: string }[] = [];

  Object.entries(newestLocation).forEach(([districts]) => {
    Object.entries(districts).forEach(([chiefdoms]) => {
      Object.entries(chiefdoms).forEach(([chiefdom, phus]) => {
        Object.keys(phus).forEach((phuName) => {
          options.push({
            label: `${chiefdom}, ${phuName}`,
            value: phuName,
          });
        });
      });
    });
  });

  return options;
};

export const phuArray = Object.values(newestLocation).flatMap((districts) =>
  Object.values(districts).flatMap((chiefdoms) =>
    Object.entries(chiefdoms).flatMap(([chiefdomName, phus]) =>
      Object.keys(phus).map((phuName) => ({
        value: phuName,
        label: `${chiefdomName} > ${phuName}`,
      }))
    )
  )
);
