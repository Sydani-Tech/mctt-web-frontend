import Dexie from "dexie";
import type { Table } from "dexie";

export interface SyncStatus {
  syncStatus: "synced" | "pending" | "failed";
}

export interface ProgramAnalysisData extends SyncStatus {
  id?: number;
  phuId: string;
  analysisField1: string;
}

export interface LogisticsValidations extends SyncStatus {
  id?: number;
  phuId: string;
  logisticField1: string;
}

export interface SocialMappingForm extends SyncStatus {
  id?: number;
  phuId: string;
  mappingField1: string;
}

export interface SectionPlan extends SyncStatus {
  id?: number;
  phuId: string;
  planField1: string;
}

export interface DemographicData extends SyncStatus {
  phuId: string;
  community: string;
  nameOfVillageHead: string;
  phoneNumber: string;
  createdAt: string;

  programAnalysis?: ProgramAnalysisData;
  logisticsAndSuppliesData?: LogisticsValidations;
  socialMappingData?: SocialMappingForm;
  sectionPlanning?: SectionPlan;
}

// ---- Dexie Database ----
export class PHUDatabase extends Dexie {
  demographicData!: Table<DemographicData, string>;

  constructor() {
    super("PHUDatabase");

    this.version(1).stores({
      demographicData: "phuId", // indexed by phuId
    });
  }
}

export const db = new PHUDatabase();
