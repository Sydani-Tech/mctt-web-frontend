export type OtherVaccine = {
  number: number;
  name?: string;
  value?: string | number;
};

export type VaccineFields = {
  birthB: string;
  penta1: string;
  penta3: string;
  MVC1MR1: string;
  MVC2MR2: string;
  Td2TTCV: string;
  otherVaccines: OtherVaccine[];
};

export type DropOutRate = {
  penta1: string;
  penta3: string;
  MVC1: string;
  MVC2: string;
};

export interface ProgramAnalysisData {
  otherCases: string[];
  numberOfMeasles12M: string;
  numberOfAFP12M: string;
  numberOfTetanus12M: string;

  dosesAdministered: VaccineFields;
  vaccins: VaccineFields;
  unImmunized: VaccineFields;

  dropOutRate: DropOutRate;

  problemsRelatingToAccess: string;
  problemsRelatingToUtilization: string;
  category: string;
  areThereSignificantVpds: string;
  areThereSignificantRiskPopulation: string;
  areThereSignificantUnimmunized: string;
  rating: string;
  createdAt?: string;
}
