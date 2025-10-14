/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LogisticsValidations } from "@/typings/logistics-supplies";
import moment from "moment";
import React from "react";

interface LogisticsDetailsProps {
  data: LogisticsValidations;
}

const formatLabel = (label: string) => {
  return label
    .replace(/([A-Z])/g, " $1") // space before capitals
    .replace(/_/g, " ") // replace underscores
    .replace(/\b\w/g, (char) => char.toUpperCase()) // capitalize words
    .trim();
};

const LogisticsDetails: React.FC<LogisticsDetailsProps> = ({ data }) => {
  const { otherSupplies = [], createdAt, ...vaccines } = data;

  return (
    <div className="bg-gray-100 rounded-2xl shadow-sm p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Logistics Data</h2>
        <p className="text-sm text-gray-500 mt-1">
          {moment(data?.createdAt).format("MMM D, YYYY [at] h:mm A")}
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {Object.entries(vaccines).map(([key, values]) => (
          <div
            key={key}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              {formatLabel(key)}
            </h3>
            <div className="space-y-2 text-sm">
              {Object.entries(values).map(([field, val]) => (
                <div
                  key={field}
                  className="flex justify-between items-center border-b border-gray-100 pb-1"
                >
                  <span className="text-gray-600">{formatLabel(field)}</span>
                  <span className="font-medium text-gray-900">
                    {val !== "" ? val : "-"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {otherSupplies.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-4">Other Supplies</h3>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {otherSupplies.map((supply, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow p-6 border border-gray-200 hover:shadow-lg transition"
              >
                <h4 className="text-lg font-semibold mb-3">{supply.title}</h4>
                <div className="space-y-2 text-sm">
                  {Object.entries(supply).map(([field, val]) =>
                    field === "title" ? null : (
                      <div
                        key={field}
                        className="flex justify-between items-center border-b border-gray-100 pb-1"
                      >
                        <span className="text-gray-600">
                          {formatLabel(field)}
                        </span>
                        <span className="font-medium text-gray-900">
                          {val !== "" ? val : "-"}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LogisticsDetails;
