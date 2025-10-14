import type { LogisticsValidations } from "./logistics-supplies";
import type { ProgramAnalysisData } from "./program-analysis";
import type { SocialMappingForm } from "./social-mapping";

export interface School {
  nameOfSchool: string;
  headMaster: string;
  headMasterContact: string;
  strengthOfOpportunities: string;
}

interface SectionPlan {
  sessionPerWeek: string;
  distanceToVacinationPost: string;
  sessionType: string;
  strengthOfOpportunities: string;
  areThereHighRiskPopulations: string;
  infantsVaccinated: string;
}

export interface OpinionLeader {
  nameOfLeader: string;
  contactOfLeader: string;
  strengthOfWorkingWithLeader: string;
  potentialContribution: string;
}

export interface FaithBasedInstitution {
  nameOfInstitution: string;
  nameOfLeader: string;
  strengthAndOpportunities: string;
}

export interface TraditionalAuthority {
  name: string;
  contactDetails: string;
  strengthAndOpportunities: string;
}

export interface GroupOrOrganization {
  name: string;
  contactDetails: string;
  strengthAndOpportunities: string;
}

export interface InfluencerOrOpinionLeader {
  name: string;
  contactDetails: string;
  strengthAndOpportunities: string;
}

export interface DemographicData {
  community: string;
  nameOfAttendingVillages: string;
  nameOfVillageHead: string;
  phoneNumber: string;
  identity: string;
  healthWorker: string;
  healthWorkerPhone: string;
  isFacilityAvailable: string;
  createdAt: string;

  status: string;
  type: string;
  distanceClosestToHealthFacility: string;
  howManyHealthFacilities: string;

  howManySchools: string;
  schools: School[];

  areThereOpinionLeaders: string;
  opinionLeaders: OpinionLeader[];

  areThereFaithBasedInstitutions: string;
  faithBasedInstitutions: FaithBasedInstitution[];

  areThereTraditionalAuthorities: string;
  traditionalAuthorities: TraditionalAuthority[];

  areThereGroupsOrOrganizations: string;
  groupsOrOrganizations: GroupOrOrganization[];

  areThereInfluencersOrOpinionLeaders: string;
  influencersOrOpinionLeaders: InfluencerOrOpinionLeader[];

  totalPopulation: string;

  numberOfBirths: string;
  survivingInfants: string;
  "12To23Months": string;
  "24To59Months": string;
  pregnantWomen: string;
  womenOfChildBearingAge: string;
  hpvTarget: string;

  otherMNCHInterventions: string;
  siteContact: string;

  programAnalysis?: ProgramAnalysisData;
  logisticsAndSuppliesData?: LogisticsValidations;
  socialMapping?: string;
  socialMappingData?: SocialMappingForm;
  sectionPlanning?: SectionPlan;
}
