import * as Yup from "yup";

export const initialValues = {
  // region: "",
  // district: "",
  // chiefdom: "",
  // phu: "",
  name: "",
  ownership: "",
  state_of_the_health_facility: "",
  type_of_facility: "",

  no_of_children_vaccinated: "",
  no_of_fixed_sessions_conducted: "",
  no_of_outreach_sessions_conducted: "",
  no_of_teams_deployed: "",
  no_of_vaccinators: "",
  how_many_household_members_are_above_18: "",
  no_of_campaigns_conducted: "",
  no_of_supervisory_visits_conducted: "",
  no_of_cold_chain_equipment: "",
  no_of_vaccines_requested: "",
  no_of_vaccines_supplied: "",
  no_of_vaccines_utilized: "",
  status: "pending",

  // nameOfAttendingVillages: "",
  // nameOfVillageHead: "",
  // phoneNumber: "",
  // identity: "",
  // healthWorker: "",
  // healthWorkerPhone: "",
  // isFacilityAvailable: "",

  // distanceClosestToHealthFacility: "",
  // // nameOfHealthFacility: "",
  // howManyHealthFacilities: "",
  // status: "pending",
  // howManySchools: "",
  // type: "Demographics",
  // schools: [
  //   {
  //     nameOfSchool: "",
  //     headMaster: "",
  //     headMasterContact: "",
  //     strengthOfOpportunities: "",
  //   },
  // ],
  // areThereOpinionLeaders: "",
  // opinionLeaders: [
  //   {
  //     nameOfLeader: "",
  //     contactOfLeader: "",
  //     strengthOfWorkingWithLeader: "",
  //     potentialContribution: "",
  //   },
  // ],
  // areThereFaithBasedInstitutions: "",
  // faithBasedInstitutions: [
  //   {
  //     nameOfInstitution: "",
  //     nameOfLeader: "",
  //     strengthAndOpportunities: "",
  //   },
  // ],

  // areThereTraditionalAuthorities: "",
  // traditionalAuthorities: [
  //   {
  //     name: "",
  //     contactDetails: "",
  //     strengthAndOpportunities: "",
  //   },
  // ],

  // areThereGroupsOrOrganizations: "",
  // groupsOrOrganizations: [
  //   {
  //     name: "",
  //     contactDetails: "",
  //     strengthAndOpportunities: "",
  //   },
  // ],

  // areThereInfluencersOrOpinionLeaders: "",
  // influencersOrOpinionLeaders: [
  //   {
  //     name: "",
  //     contactDetails: "",
  //     strengthAndOpportunities: "",
  //   },
  // ],

  // totalPopulation: "",

  // numberOfBirths: "",
  // survivingInfants: "",
  // "12To23Months": "",
  // "24To59Months": "",
  // pregnantWomen: "",
  // womenOfChildBearingAge: "",
  // hpvTarget: "",

  // otherMNCHInterventions: "",
  // siteContact: "",
};
export const vaccinationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  ownership: Yup.string().required("Ownership is required"),
  state_of_the_health_facility: Yup.string().required(
    "State of the health facility is required"
  ),
  type_of_facility: Yup.string().required("Type of facility is required"),

  no_of_children_vaccinated: Yup.number()
    .typeError("Number of children vaccinated must be a number")
    .required("Number of children vaccinated is required"),
  no_of_fixed_sessions_conducted: Yup.number()
    .typeError("Number of fixed sessions conducted must be a number")
    .required("Number of fixed sessions conducted is required"),
  no_of_outreach_sessions_conducted: Yup.number()
    .typeError("Number of outreach sessions conducted must be a number")
    .required("Number of outreach sessions conducted is required"),
  no_of_teams_deployed: Yup.number()
    .typeError("Number of teams deployed must be a number")
    .required("Number of teams deployed is required"),
  no_of_vaccinators: Yup.number()
    .typeError("Number of vaccinators must be a number")
    .required("Number of vaccinators is required"),
  how_many_household_members_are_above_18: Yup.number()
    .typeError("This value must be a number")
    .required("How many household members are above 18 is required"),
  no_of_campaigns_conducted: Yup.number()
    .typeError("Number of campaigns conducted must be a number")
    .required("Number of campaigns conducted is required"),
  no_of_supervisory_visits_conducted: Yup.number()
    .typeError("Number of supervisory visits conducted must be a number")
    .required("Number of supervisory visits conducted is required"),
  no_of_cold_chain_equipment: Yup.number()
    .typeError("Number of cold chain equipment must be a number")
    .required("Number of cold chain equipment is required"),
  no_of_vaccines_requested: Yup.number()
    .typeError("Number of vaccines requested must be a number")
    .required("Number of vaccines requested is required"),
  no_of_vaccines_supplied: Yup.number()
    .typeError("Number of vaccines supplied must be a number")
    .required("Number of vaccines supplied is required"),
  no_of_vaccines_utilized: Yup.number()
    .typeError("Number of vaccines utilized must be a number")
    .required("Number of vaccines utilized is required"),
});

export const demographicValidationSchemas = [
  vaccinationSchema,
  // Yup.object({
  //   nameOfVillageHead: Yup.string().required(
  //     "Name of village head is required"
  //   ),
  //   phoneNumber: Yup.string().required(
  //     "Phone number of village head is required"
  //   ),
  //   identity: Yup.string().required("This is required"),
  //   healthWorker: Yup.string().required("This is required"),
  //   healthWorkerPhone: Yup.string().required("This is required"),
  //   isFacilityAvailable: Yup.string().required("This is required"),
  // }),
  // Yup.object({
  //   distanceClosestToHealthFacility: Yup.string().required("This is required"),
  //   // nameOfHealthFacility: Yup.string().required("This is required"),
  //   // howManyHealthFacilities: Yup.number().required("This is required"),
  //   howManySchools: Yup.number().required("This is required"),
  //   areThereOpinionLeaders: Yup.string()
  //     .oneOf(["yes", "no"])
  //     .required("Select Yes or No"),
  //   areThereFaithBasedInstitutions: Yup.string()
  //     .oneOf(["yes", "no"])
  //     .required("Select Yes or No"),
  //   areThereTraditionalAuthorities: Yup.string()
  //     .oneOf(["yes", "no"])
  //     .required("Select Yes or No"),
  //   areThereGroupsOrOrganizations: Yup.string()
  //     .oneOf(["yes", "no"])
  //     .required("Select Yes or No"),
  //   areThereInfluencersOrOpinionLeaders: Yup.string()
  //     .oneOf(["yes", "no"])
  //     .required("Select Yes or No"),
  // }),
  // Yup.object({
  //   totalPopulation: Yup.string().required("This is required"),
  // }),
  // Yup.object({
  //   numberOfBirths: Yup.string().required("This is required"),
  //   survivingInfants: Yup.string().required("This is required"),
  //   "12To23Months": Yup.string().required("This is required"),
  //   "24To59Months": Yup.string().required("This is required"),
  //   pregnantWomen: Yup.string().required("This is required"),
  //   womenOfChildBearingAge: Yup.string().required("This is required"),
  //   hpvTarget: Yup.string().required("This is required"),
  // }),
  // Yup.object({
  //   otherMNCHInterventions: Yup.string().required("This is required"),
  //   siteContact: Yup.string().required("This is required"),
  // }),
];
