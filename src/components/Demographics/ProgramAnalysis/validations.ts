import * as Yup from "yup";
export const initialValues = {
  otherCases: [],
  numberOfMeasles12M: "",
  numberOfAFP12M: "",
  numberOfTetanus12M: "",

  dosesAdministered: {
    birthB: "",
    penta1: "",
    penta3: "",
    MVC1MR1: "",
    MVC2MR2: "",
    Td2TTCV: "",

    otherVaccines: [],
  },

  vaccins: {
    birthB: "",
    penta1: "",
    penta3: "",
    MVC1MR1: "",
    MVC2MR2: "",
    Td2TTCV: "",

    otherVaccines: [],
  },

  unImmunized: {
    birthB: "",
    penta1: "",
    penta3: "",
    MVC1MR1: "",
    MVC2MR2: "",
    Td2TTCV: "",

    otherVaccines: [],
  },

  dropOutRate: {
    penta1: "",
    penta3: "",
    MVC1: "",
    MVC2: "",
  },

  problemsRelatingToAccess: "",
  problemsRelatingToUtilization: "",
  category: "",
  areThereSignificantVpds: "",
  areThereSignificantRiskPopulation: "",
  areThereSignificantUnimmunized: "",
  rating: "",
};

export const programAnalysisValidationSchemas = [
  Yup.object({
    numberOfMeasles12M: Yup.number().required("This is required"),
    numberOfAFP12M: Yup.number().required("This is required"),
    numberOfTetanus12M: Yup.number().required("This is required"),
  }),
  Yup.object({
    dosesAdministered: Yup.object().shape({
      birthB: Yup.number()
        .typeError("Birth dose Hep B must be a number")
        .required("Birth dose Hep B is required")
        .min(0, "Value cannot be negative"),
      penta1: Yup.number()
        .typeError("Penta 1 must be a number")
        .required("Penta 1 is required")
        .min(0, "Value cannot be negative"),
      penta3: Yup.number()
        .typeError("Penta 3 must be a number")
        .required("Penta 3 is required")
        .min(0, "Value cannot be negative"),
      MVC1MR1: Yup.number()
        .typeError("MCV1/MR1 must be a number")
        .required("MCV1/MR1 is required")
        .min(0, "Value cannot be negative"),
      MVC2MR2: Yup.number()
        .typeError("MCV2/MR2 must be a number")
        .required("MCV2/MR2 is required")
        .min(0, "Value cannot be negative"),
      Td2TTCV: Yup.number()
        .typeError("Td2+/TTCV must be a number")
        .required("Td2+/TTCV is required")
        .min(0, "Value cannot be negative"),

      otherVaccines: Yup.array().of(
        Yup.object().shape({
          name: Yup.string()
            .required("Vaccine name is required")
            .max(100, "Name cannot exceed 100 characters"),
          number: Yup.number()
            .typeError("Number of cases must be a number")
            .required("Number of cases is required")
            .min(0, "Value cannot be negative"),
        })
      ),
    }),
  }),
  Yup.object({
    vaccins: Yup.object().shape({
      birthB: Yup.number()
        .typeError("Birth dose Hep B must be a number")
        .required("Birth dose Hep B is required")
        .min(0, "Value cannot be negative"),
      penta1: Yup.number()
        .typeError("Penta 1 must be a number")
        .required("Penta 1 is required")
        .min(0, "Value cannot be negative"),
      penta3: Yup.number()
        .typeError("Penta 3 must be a number")
        .required("Penta 3 is required")
        .min(0, "Value cannot be negative"),
      MVC1MR1: Yup.number()
        .typeError("MCV1/MR1 must be a number")
        .required("MCV1/MR1 is required")
        .min(0, "Value cannot be negative"),
      MVC2MR2: Yup.number()
        .typeError("MCV2/MR2 must be a number")
        .required("MCV2/MR2 is required")
        .min(0, "Value cannot be negative"),
      Td2TTCV: Yup.number()
        .typeError("Td2+/TTCV must be a number")
        .required("Td2+/TTCV is required")
        .min(0, "Value cannot be negative"),

      otherVaccines: Yup.array().of(
        Yup.object().shape({
          name: Yup.string()
            .required("Vaccine name is required")
            .max(100, "Name cannot exceed 100 characters"),
          number: Yup.number()
            .typeError("Number of cases must be a number")
            .required("Number of cases is required")
            .min(0, "Value cannot be negative"),
        })
      ),
    }),
  }),
  Yup.object({
    unImmunized: Yup.object().shape({
      birthB: Yup.number()
        .typeError("Birth dose Hep B must be a number")
        .required("Birth dose Hep B is required")
        .min(0, "Value cannot be negative"),
      penta1: Yup.number()
        .typeError("Penta 1 must be a number")
        .required("Penta 1 is required")
        .min(0, "Value cannot be negative"),
      penta3: Yup.number()
        .typeError("Penta 3 must be a number")
        .required("Penta 3 is required")
        .min(0, "Value cannot be negative"),
      MVC1MR1: Yup.number()
        .typeError("MCV1/MR1 must be a number")
        .required("MCV1/MR1 is required")
        .min(0, "Value cannot be negative"),
      MVC2MR2: Yup.number()
        .typeError("MCV2/MR2 must be a number")
        .required("MCV2/MR2 is required")
        .min(0, "Value cannot be negative"),
      Td2TTCV: Yup.number()
        .typeError("Td2+/TTCV must be a number")
        .required("Td2+/TTCV is required")
        .min(0, "Value cannot be negative"),

      otherVaccines: Yup.array().of(
        Yup.object().shape({
          name: Yup.string()
            .required("Vaccine name is required")
            .max(100, "Name cannot exceed 100 characters"),
          number: Yup.number()
            .typeError("Number of cases must be a number")
            .required("Number of cases is required")
            .min(0, "Value cannot be negative"),
        })
      ),
    }),
  }),
  Yup.object({
    dropOutRate: Yup.object().shape({
      penta1: Yup.number()
        .typeError("Penta 1 must be a number")
        .required("Penta 1 is required")
        .min(0, "Value cannot be negative"),
      penta3: Yup.number()
        .typeError("Penta 3 must be a number")
        .required("Penta 3 is required")
        .min(0, "Value cannot be negative"),
      MVC1: Yup.number()
        .typeError("MCV1 must be a number")
        .required("MCV1 is required")
        .min(0, "Value cannot be negative"),
      MVC2: Yup.number()
        .typeError("MCV2 must be a number")
        .required("MCV2 is required")
        .min(0, "Value cannot be negative"),
    }),
  }),
  Yup.object({
    problemsRelatingToAccess: Yup.string().required("This is required"),
    problemsRelatingToUtilization: Yup.string().required("This is required"),
    category: Yup.string().required("This is required"),
    areThereSignificantVpds: Yup.string().required("This is required"),
    areThereSignificantRiskPopulation:
      Yup.string().required("This is required"),
    areThereSignificantUnimmunized: Yup.string().required("This is required"),
    rating: Yup.string().required("This is required"),
  }),
];
