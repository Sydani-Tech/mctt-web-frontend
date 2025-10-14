import type { HouseholdData } from "@/typings/house-hold";
import * as Yup from "yup";

export const initialValues: HouseholdData = {
  community: "",
  areThereChildren: "",
  villageHeadName: "",
  houseAddress: "",
  isHouseNumbered: "",
  houseNumber: "",
  householdHeadName: "",
  householdHeadDob: "",
  status: "pending",
  createdAt: "",
  motherName: "",
  motherDob: "",
  lastVaccinationSite: "",
  hasPregnantWomen: "",
  pregnantWomen: [{ fullName: "", dob: "", ttTaken: "" }],
  children: [{ fullName: "", dob: "", antigens: [], hasCard: "", gender: "" }],
  hadVpd: "",
  vpdType: "",
  geoCoordinates: null,
};

export const houseHoldValidationSchemas = [
  // Step 1
  Yup.object({
    // enumeratorName: Yup.string().required("Enumerator name is required"),
    // phoneNumber: Yup.string()
    //   .matches(/^[0-9]{10,15}$/, "Enter a valid phone number")
    //   .required("Phone number is required"),
    // dateOfVisit: Yup.date().required("Date of visit is required"),
    // timeOfVisit: Yup.string().required("Time of visit is required"),
    community: Yup.string().required("Community is required"),
    villageHeadName: Yup.string().required("Village head name is required"),
  }),

  // Step 2
  Yup.object({
    houseAddress: Yup.string().required("House address is required"),
    isHouseNumbered: Yup.string().required("Please select Yes or No"),
    houseNumber: Yup.string().when("isHouseNumbered", {
      is: "yes",
      then: (schema) => schema.required("House number is required"),
    }),
    geoCoordinates: Yup.object({
      latitude: Yup.number()
        .required("Latitude is required")
        .typeError("Latitude must be a number"),
      longitude: Yup.number()
        .required("Longitude is required")
        .typeError("Longitude must be a number"),
    }).required("Geo-coordinates required"),
    // householdSize: Yup.number()
    //   .positive("Must be positive")
    //   .integer()
    //   .required("Household size is required"),
    householdHeadName: Yup.string().required(
      "Head of household name is required"
    ),
    householdHeadDob: Yup.string().required(
      "Head of household date of birth is required"
    ),
    motherName: Yup.string().required("Mother's name is required"),
    motherDob: Yup.string().required("Mother's date of birth is required"),
  }),

  // Step 3 (Children details)
  Yup.object({
    // maleChildrenCount: Yup.number().min(0).required(),
    // maleChildrenCount: Yup.number().when("areThereChildren", {
    //   is: "yes",
    //   then: (schema) => schema.min(0).required("Enter number of male children"),
    //   otherwise: (schema) => schema.notRequired(),
    // }),
    areThereChildren: Yup.string()
      .oneOf(["yes", "no"])
      .required("Select Yes or No"),

    children: Yup.array().of(
      Yup.object().shape({
        fullName: Yup.string().when("$areThereChildren", {
          is: "yes",
          then: (schema) => schema.required("Child full name required"),
          otherwise: (schema) => schema.optional(),
        }),
        dob: Yup.string().when("$areThereChildren", {
          is: "yes",
          then: (schema) => schema.required("Child date of birth required"),
          otherwise: (schema) => schema.optional(),
        }),
        gender: Yup.string().when("$areThereChildren", {
          is: "yes",
          then: (schema) => schema.required("Child gender required"),
          otherwise: (schema) => schema.optional(),
        }),
        antigens: Yup.array().of(Yup.string()).nullable(),
        hasCard: Yup.string().nullable(),
      })
    ),
    // under5Children: Yup.array().of(
    //   Yup.object({
    //     name: Yup.string().required("Name required"),
    //     dob: Yup.date().required("DOB required"),
    //     // ageInMonths: Yup.number().required("Age in months required"),
    //     gender: Yup.string()
    //       .oneOf(["male", "female"])
    //       .required("Gender required"),
    //     hasCard: Yup.string().required("Card status required"),
    //     antigens: Yup.array().of(Yup.string()),
    //   })
    // ),
  }),

  // Step 4 (Pregnancy & Women)
  Yup.object({
    hasPregnantWomen: Yup.string().required("Required"),
    pregnantWomen: Yup.array()
      .when("hasPregnantWomen", {
        is: "yes",
        then: (schema) =>
          schema
            .of(
              Yup.object({
                fullName: Yup.string().required("Fullname is required"),
                dob: Yup.string().required("Date of birth is required"),
                ttTaken: Yup.string().required("TT/Td status is required"),
              })
            )
            .min(1, "At least one pregnant woman must be added"),
      })
      .nullable(),
  }),

  // Step 5 (VPD & Geo)
  Yup.object({
    hadVpd: Yup.string().required(),
    vpdType: Yup.string().when("hadVpd", {
      is: "yes",
      then: (schema) => schema.required("Select VPD"),
    }),
    // geoCoordinates: Yup.string().required("Geo-coordinate required"),
  }),
];
