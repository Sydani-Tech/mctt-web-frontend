/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LogisticsValidations } from "@/typings/logistics-supplies";
import React from "react";

interface SyringeConfig {
  title: string;
  vaccineKey: keyof LogisticsValidations;
  annualDoses: (vaccine: any) => number;
  annualSyringes: (annualDoses: number) => number;
}

const syringeConfigs: SyringeConfig[] = [
  {
    title: "0.05mls AD Syringes for BCG",
    vaccineKey: "bcgLiveBirth",
    annualDoses: (v) => v.dosesAdministeredPerSession * v.sessionsPerWeek * 52,
    annualSyringes: (annualDoses) => annualDoses,
  },
  {
    title: "1ml Syringes BCG for Dilution",
    vaccineKey: "bcgLiveBirth",
    annualDoses: (v) =>
      (v.dosesAdministeredPerSession * v.sessionsPerWeek * 52) / 20,
    annualSyringes: (annualDoses) => annualDoses,
  },
  {
    title: "0.5mls AD Syringes for Pentavalent",
    vaccineKey: "pentavalentLiveBirth",
    annualDoses: (v) => v.dosesAdministeredPerSession * v.sessionsPerWeek * 52,
    annualSyringes: (annualDoses) => annualDoses,
  },
  {
    title: "0.5mls AD Syringes for Pneumococcal",
    vaccineKey: "pneumococal",
    annualDoses: (v) => v.dosesAdministeredPerSession * v.sessionsPerWeek * 52,
    annualSyringes: (annualDoses) => annualDoses,
  },
  {
    title: "0.5mls AD Syringes for IPV",
    vaccineKey: "IPV",
    annualDoses: (v) => v.dosesAdministeredPerSession * v.sessionsPerWeek * 52,
    annualSyringes: (annualDoses) => annualDoses,
  },
  {
    title: "0.5mls AD Syringes for Measles",
    vaccineKey: "measlesAndRubella",
    annualDoses: (v) => v.dosesAdministeredPerSession * v.sessionsPerWeek * 52,
    annualSyringes: (annualDoses) => annualDoses,
  },
  {
    title: "5mls Syringes for Measles Dilution",
    vaccineKey: "measlesAndRubella",
    annualDoses: (v) =>
      (v.dosesAdministeredPerSession * v.sessionsPerWeek * 52) / 10,
    annualSyringes: (annualDoses) => annualDoses,
  },
  {
    title: "0.5mls AD Syringes for Yellow Fever",
    vaccineKey: "yellowFever",
    annualDoses: (v) => v.dosesAdministeredPerSession * v.sessionsPerWeek * 52,
    annualSyringes: (annualDoses) => annualDoses,
  },
  {
    title: "5mls Syringes for Yellow Fever Dilution",
    vaccineKey: "yellowFever",
    annualDoses: (v) =>
      (v.dosesAdministeredPerSession * v.sessionsPerWeek * 52) / 10,
    annualSyringes: (annualDoses) => annualDoses,
  },
  {
    title: "0.5mls AD Syringes for Td Pregnant",
    vaccineKey: "tetanus",
    annualDoses: (v) => v.dosesAdministeredPerSession * v.sessionsPerWeek * 52,
    annualSyringes: (annualDoses) => annualDoses,
  },
];

const SyringeRequirements: React.FC<{ data: LogisticsValidations }> = ({
  data,
}) => {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-sm p-6 space-y-6">
      <h2 className="text-3xl font-bold mb-6">Syringe Requirements</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {syringeConfigs.map(
          ({ title, vaccineKey, annualDoses, annualSyringes }) => {
            const vaccine = data[vaccineKey];
            if (!vaccine) return null;

            const annualDoseCount = Math.round(annualDoses(vaccine));
            const annualSyringeCount = Math.round(
              annualSyringes(annualDoseCount)
            );
            const monthlySyringes = Math.round(annualSyringeCount / 12);

            return (
              <div
                key={title}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  {title}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-600">Annual Doses Needed</span>
                    <span className="font-medium">
                      {annualDoseCount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-600">
                      Syringes Needed Annually
                    </span>
                    <span className="font-medium">
                      {annualSyringeCount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Syringes Needed Monthly
                    </span>
                    <span className="font-medium">
                      {monthlySyringes.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default SyringeRequirements;
