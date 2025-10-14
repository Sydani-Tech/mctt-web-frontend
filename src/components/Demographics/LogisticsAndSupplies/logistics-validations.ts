import * as Yup from "yup";
import { vaccineFields } from "./LogisticsFields";
import type { LogisticsValidations } from "@/typings/logistics-supplies";

export const logisticsValidations: LogisticsValidations = {
  bcgLiveBirth: {
    dosesOpenedPerSession: "",
    dosesAdministeredPerSession: "",
    expectedCoverage: "",
    statusOfMDVPInHours: 6,
    anticipatedWastageFct: 2,
    sessionsPerWeek: "",
    vialSize: "",
  },

  pentavalentLiveBirth: {
    dosesOpenedPerSession: "",
    dosesAdministeredPerSession: "",
    statusOfMDVPInDays: 28,
    anticipatedWastageFct: 1.05,
    expectedCoverage: "",
    sessionsPerWeek: "",
    vialSize: "",
  },

  oralPolio: {
    dosesOpenedPerSession: "",
    dosesAdministeredPerSession: "",
    statusOfMDVPInDays: 28,
    anticipatedWastageFct: 1.11,
    expectedCoverage: "",
    sessionsPerWeek: "",
    vialSize: "",
  },

  IPV: {
    dosesOpenedPerSession: "",
    dosesAdministeredPerSession: "",
    statusOfMDVPInDays: 28,
    anticipatedWastageFct: 1.11,
    expectedCoverage: "",
    sessionsPerWeek: "",
    vialSize: "",
  },

  measlesAndRubella: {
    dosesOpenedPerSession: "",
    dosesAdministeredPerSession: "",
    expectedCoverage: "",
    statusOfMDVPInHours: 6,
    anticipatedWastageFct: 1.11,
    sessionsPerWeek: "",
    vialSize: "",
  },

  yellowFever: {
    dosesOpenedPerSession: "",
    dosesAdministeredPerSession: "",
    expectedCoverage: "",
    statusOfMDVPInHours: 6,
    anticipatedWastageFct: 1.11,
    sessionsPerWeek: "",
    vialSize: "",
  },

  pneumococal: {
    dosesOpenedPerSession: "",
    dosesAdministeredPerSession: "",
    expectedCoverage: "",
    statusOfMDVPInHours: 6,
    anticipatedWastageFct: 1.11,
    sessionsPerWeek: "",
    vialSize: "",
  },

  rotaVirus: {
    dosesOpenedPerSession: "",
    dosesAdministeredPerSession: "",
    expectedCoverage: "",
    statusOfMDVPI: "",
    anticipatedWastageFct: 1.05,
    sessionsPerWeek: "",
    vialSize: "",
  },

  tetanus: {
    dosesOpenedPerSession: "",
    dosesAdministeredPerSession: "",
    expectedCoverage: "",
    statusOfMDVPI: "",
    statusOfMDVPInDays: 28,
    anticipatedWastageFct: 1.11,
    sessionsPerWeek: "",
    vialSize: "",
  },

  HPV: {
    dosesOpenedPerSession: "",
    dosesAdministeredPerSession: "",
    expectedCoverage: "",
    statusOfMDVPI: "",
    anticipatedWastageFct: 1.05,
    sessionsPerWeek: "",
    vialSize: "",
  },

  vitalA1_5: {
    dosesOpenedPerSession: "",
    dosesAdministeredPerSession: "",
    expectedCoverage: "",
    statusOfMDVPI: "",
    anticipatedWastageFct: 1.11,
    sessionsPerWeek: "",
    vialSize: "",
  },

  vitalA1: {
    dosesOpenedPerSession: "",
    dosesAdministeredPerSession: "",
    expectedCoverage: "",
    statusOfMDVPI: "",
    anticipatedWastageFct: 1.11,
    sessionsPerWeek: "",
    vialSize: "",
  },

  albendazole400MG_12_59M: {
    dosesOpenedPerSession: "",
    dosesAdministeredPerSession: "",
    expectedCoverage: "",
    statusOfMDVPI: "",
    anticipatedWastageFct: 1.11,
    sessionsPerWeek: "",
    vialSize: "",
  },

  otherSupplies: [],
};

const getFieldSchema = (fieldName: string) => {
  if (fieldName.toLowerCase().includes("status")) {
    return Yup.string().required("This field is required");
  }

  return Yup.number()
    .typeError("Must be a number")
    .required("This field is required")
    .min(0, "Value cannot be negative");
};

export const logisticsValidationSchemas = vaccineFields.map((vaccine) => {
  return Yup.object({
    [vaccine.baseName]: Yup.object(
      vaccine.fields.reduce((acc, field) => {
        acc[field.name] = getFieldSchema(field.name);
        return acc;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }, {} as Record<string, any>)
    ),
  });
});
