import * as Yup from "yup";

export const initialValues = {
  // region: "",
  // district: "",
  // chiefdom: "",
  // phu: "",
  community: "",
  nameOfAttendingVillages: "",
  nameOfVillageHead: "",
  phoneNumber: "",
  identity: "",
  healthWorker: "",
  healthWorkerPhone: "",
  isFacilityAvailable: "",

  distanceClosestToHealthFacility: "",
  // nameOfHealthFacility: "",
  howManyHealthFacilities: "",
  status: "pending",
  howManySchools: "",
  type: "Demographics",
  schools: [
    {
      nameOfSchool: "",
      headMaster: "",
      headMasterContact: "",
      strengthOfOpportunities: "",
    },
  ],
  areThereOpinionLeaders: "",
  opinionLeaders: [
    {
      nameOfLeader: "",
      contactOfLeader: "",
      strengthOfWorkingWithLeader: "",
      potentialContribution: "",
    },
  ],
  areThereFaithBasedInstitutions: "",
  faithBasedInstitutions: [
    {
      nameOfInstitution: "",
      nameOfLeader: "",
      strengthAndOpportunities: "",
    },
  ],

  areThereTraditionalAuthorities: "",
  traditionalAuthorities: [
    {
      name: "",
      contactDetails: "",
      strengthAndOpportunities: "",
    },
  ],

  areThereGroupsOrOrganizations: "",
  groupsOrOrganizations: [
    {
      name: "",
      contactDetails: "",
      strengthAndOpportunities: "",
    },
  ],

  areThereInfluencersOrOpinionLeaders: "",
  influencersOrOpinionLeaders: [
    {
      name: "",
      contactDetails: "",
      strengthAndOpportunities: "",
    },
  ],

  totalPopulation: "",

  numberOfBirths: "",
  survivingInfants: "",
  "12To23Months": "",
  "24To59Months": "",
  pregnantWomen: "",
  womenOfChildBearingAge: "",
  hpvTarget: "",

  otherMNCHInterventions: "",
  siteContact: "",
};

export const demographicValidationSchemas = [
  Yup.object({
    // nameOfAttendingVillages: Yup.string().required(
    //   " Name of the attending villages/Sites for MNCH services is required"
    // ),
    // region: Yup.string().required("Region is required"),
    // district: Yup.string().required("District is required"),
    // chiefdom: Yup.string().required("Chiefdom is required"),
    nameOfVillageHead: Yup.string().required(
      "Name of village head is required"
    ),
    phoneNumber: Yup.string().required(
      "Phone number of village head is required"
    ),
    identity: Yup.string().required("This is required"),
    healthWorker: Yup.string().required("This is required"),
    healthWorkerPhone: Yup.string().required("This is required"),
    isFacilityAvailable: Yup.string().required("This is required"),
  }),
  Yup.object({
    distanceClosestToHealthFacility: Yup.string().required("This is required"),
    // nameOfHealthFacility: Yup.string().required("This is required"),
    // howManyHealthFacilities: Yup.number().required("This is required"),
    howManySchools: Yup.number().required("This is required"),
    areThereOpinionLeaders: Yup.string()
      .oneOf(["yes", "no"])
      .required("Select Yes or No"),
    areThereFaithBasedInstitutions: Yup.string()
      .oneOf(["yes", "no"])
      .required("Select Yes or No"),
    areThereTraditionalAuthorities: Yup.string()
      .oneOf(["yes", "no"])
      .required("Select Yes or No"),
    areThereGroupsOrOrganizations: Yup.string()
      .oneOf(["yes", "no"])
      .required("Select Yes or No"),
    areThereInfluencersOrOpinionLeaders: Yup.string()
      .oneOf(["yes", "no"])
      .required("Select Yes or No"),
  }),
  Yup.object({
    totalPopulation: Yup.string().required("This is required"),
  }),
  Yup.object({
    numberOfBirths: Yup.string().required("This is required"),
    survivingInfants: Yup.string().required("This is required"),
    "12To23Months": Yup.string().required("This is required"),
    "24To59Months": Yup.string().required("This is required"),
    pregnantWomen: Yup.string().required("This is required"),
    womenOfChildBearingAge: Yup.string().required("This is required"),
    hpvTarget: Yup.string().required("This is required"),
  }),
  Yup.object({
    otherMNCHInterventions: Yup.string().required("This is required"),
    siteContact: Yup.string().required("This is required"),
  }),
];
