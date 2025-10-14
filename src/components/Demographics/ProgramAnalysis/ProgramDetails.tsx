import type { ProgramAnalysisData } from "@/typings/program-analysis";
import moment from "moment";
const vaccineLabels: Record<string, string> = {
  birthB: "BCG Live Birth",
  penta1: "Penta 1",
  penta3: "Penta 3",
  MVC1MR1: "MVC1 / MR1",
  MVC2MR2: "MVC2 / MR2",
  Td2TTCV: "Td2 / TTCV",
};
const ProgramDetails = ({ details }: { details?: ProgramAnalysisData }) => {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-sm p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Program Analysis details
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          {moment(details?.createdAt).format("MMM D, YYYY [at] h:mm A")}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-xl shadow">
          <p className="text-sm text-gray-500">Measles (12M)</p>
          <p className="text-lg font-semibold">
            {details?.numberOfMeasles12M.toLocaleString()}ml
          </p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow">
          <p className="text-sm text-gray-500">AFP (12M)</p>
          <p className="text-lg font-semibold">
            {details?.numberOfAFP12M.toLocaleString()}
          </p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow">
          <p className="text-sm text-gray-500">Tetanus (12M)</p>
          <p className="text-lg font-semibold">
            {details?.numberOfTetanus12M.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-base font-semibold mb-3">Doses Administered</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="">
            <p className="text-sm text-gray-500">BCG BIRTH DOSE</p>
            <p className="font-medium">{details?.dosesAdministered.birthB}</p>
          </div>
          <div className="">
            <p className="text-sm text-gray-500">{`${details?.dosesAdministered.birthB}`}</p>
            <p className="font-medium">{details?.dosesAdministered.birthB}</p>
          </div>
        </div>
      </div>
      {[
        { title: "Doses Administered", values: details?.dosesAdministered },
        { title: "Vaccines", values: details?.vaccins },
        { title: "UnImmunized", values: details?.unImmunized },
      ].map((section, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-4">
          <h2 className="text-base font-semibold mb-3">{section.title}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {section?.values &&
              Object.entries(section?.values).map(([key, value]) =>
                key !== "otherVaccines" ? (
                  <div key={key}>
                    <p className="text-sm text-gray-500">
                      {vaccineLabels[key] ?? key}{" "}
                    </p>
                    <p className="font-medium">
                      {Number(value).toLocaleString() || "-"}
                    </p>
                  </div>
                ) : (
                  <div key={key} className="md:col-span-3">
                    <p className="text-sm text-gray-500 mb-2">Other Vaccines</p>
                    {section.values?.otherVaccines &&
                    section?.values.otherVaccines.length > 0 ? (
                      <ul className="space-y-1">
                        {section?.values.otherVaccines.map((v, idx) => (
                          <li
                            key={idx}
                            className="flex justify-between text-sm"
                          >
                            <span>{v.name}</span>
                            <span className="font-medium">
                              {Number(v?.number).toLocaleString()}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-sm">None</p>
                    )}
                  </div>
                )
              )}
          </div>
        </div>
      ))}

      {/* DropOut Rates */}
      {/* <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-base font-semibold mb-3">Drop Out Rate</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {details?.dropOutRate &&
            Object.entries(details?.dropOutRate).map(([key, value]) => (
              <div key={key}>
                <p className="text-sm text-gray-500">{key}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
        </div>
      </div> */}

      {/* Flags */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-base font-semibold mb-3">Program Issues</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Problems Relating To Access</p>
            <p className="font-medium">{details?.problemsRelatingToAccess}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              Problems Relating To Utilization
            </p>
            <p className="font-medium">
              {details?.problemsRelatingToUtilization}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Significant VPDs</p>
            <p className="font-medium">{details?.areThereSignificantVpds}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Significant Risk Population</p>
            <p className="font-medium">
              {details?.areThereSignificantRiskPopulation}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Significant Unimmunized</p>
            <p className="font-medium">
              {details?.areThereSignificantUnimmunized}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Category</p>
            <p className="font-medium">{details?.category}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Rating</p>
            <p className="font-medium">{details?.rating}</p>
          </div>
        </div>
      </div>

      {/* Created At */}
      {/* <div className="text-sm text-gray-500 text-right">
        Created: {moment(details.createdAt).format("MMM D, YYYY [at] h:mm A")}
      </div> */}
    </div>
  );
};

export default ProgramDetails;
