export interface Child {
  fullName: string;
  dob: string;
  gender: "male" | "female" | "";
  hasCard: "yes" | "no" | "";
  antigens: string[];
}

export interface PregnantWoman {
  fullName: string;
  dob: string;
  ttTaken: string;
}

export interface HouseholdData {
  // enumeratorName: string;
  // phoneNumber: string;
  community: string;
  areThereChildren: "yes" | "no" | "";
  villageHeadName: string;
  houseAddress: string;
  isHouseNumbered: "yes" | "no" | "";
  houseNumber: string;
  householdHeadName: string;
  householdHeadDob: string;
  motherName: string;
  motherDob: string;
  children: Child[];
  lastVaccinationSite: string;
  hasPregnantWomen: "yes" | "no" | "";
  createdAt?: string;

  status: "pending" | "approved" | "rejected";
  pregnantWomen: PregnantWoman[];
  hadVpd: "yes" | "no" | "";
  vpdType: string;
  geoCoordinates: {
    latitude: number;
    longitude: number;
  } | null;
}
