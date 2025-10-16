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
  name: string;
  ownership: string;
  state_of_the_health_facility: string;
  type_of_facility: string;
  no_of_children_vaccinated: string;
  no_of_fixed_sessions_conducted: string;
  no_of_outreach_sessions_conducted: string;
  no_of_teams_deployed: string;
  no_of_vaccinators: string;
  how_many_household_members_are_above_18: string;
  no_of_campaigns_conducted: string;
  no_of_supervisory_visits_conducted: string;
  no_of_cold_chain_equipment: string;
  no_of_vaccines_requested: string;
  no_of_vaccines_supplied: string;
  no_of_vaccines_utilized: string;

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
