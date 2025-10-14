export interface Supply {
  name: string;
  title: string;
  quantity: number | string;
}

export interface VaccineLogistics {
  dosesOpenedPerSession: string | number;
  dosesAdministeredPerSession: string | number;
  expectedCoverage: string | number;
  sessionsPerWeek: string | number;
  vialSize: string | number;
  anticipatedWastageFct: number;

  statusOfMDVPInHours?: number;
  statusOfMDVPInDays?: number;
  statusOfMDVPI?: string | number;
}

export interface LogisticsValidations {
  bcgLiveBirth: VaccineLogistics;
  pentavalentLiveBirth: VaccineLogistics;
  oralPolio: VaccineLogistics;
  IPV: VaccineLogistics;
  measlesAndRubella: VaccineLogistics;
  yellowFever: VaccineLogistics;
  pneumococal: VaccineLogistics;
  rotaVirus: VaccineLogistics;
  tetanus: VaccineLogistics;
  HPV: VaccineLogistics;
  vitalA1_5: VaccineLogistics;
  vitalA1: VaccineLogistics;
  albendazole400MG_12_59M: VaccineLogistics;
  createdAt?: string;
  otherSupplies: Supply[];
}
