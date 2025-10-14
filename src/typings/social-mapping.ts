export const highRiskCommunities = [
  {
    label: "Urban poor/slum settlements",
    value: "Urban poor/slum settlements",
  },
  {
    label: "Migrants",
    value: "Migrants",
  },
  {
    label: "Ethnic minorities",
    value: "Ethnic minorities",
  },
  {
    label: "Rural remote",
    value: "Rural remote",
  },
  {
    label: "New urban or rural settlements",
    value: "New urban or rural settlements",
  },
  {
    label: "Other",
    value: "Other",
  },
];

export interface SocialMappingForm {
  community: string;
  villageName: string;
  totalPopulation: number;
  hasBarriers: "yes" | "no";
  accessBarriers?: string;
  accessRecommendations?: string;
  useBarriers?: string;
  useRecommendations?: string;
  source?: string;
  responsiblePerson?: string;
  comment?: string;
  createdAt?: string;
  status?: string;
}
