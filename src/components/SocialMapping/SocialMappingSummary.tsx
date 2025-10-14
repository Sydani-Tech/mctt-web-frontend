import type { SocialMappingForm } from "@/typings/social-mapping";
import moment from "moment";

export default function SocialMappingSummary({
  data,
}: {
  data: SocialMappingForm;
}) {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-sm p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          🌍 Social Mapping
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          {moment(data?.createdAt).format("MMM D, YYYY [at] h:mm A")}
        </p>
      </div>

      {/* Community Info */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          📍 Community Details
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm text-gray-700">
          <p>
            <span className="font-medium">Community Type:</span>{" "}
            {data?.community}
          </p>
          <p>
            <span className="font-medium">Village:</span> {data?.villageName}
          </p>
          <p>
            <span className="font-medium">Population:</span>{" "}
            {data?.totalPopulation.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Barriers */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          🚧 Barriers Identified
        </h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-medium">Any Barriers?:</span>{" "}
            {data?.hasBarriers}
          </p>
          <p>
            <span className="font-medium">Access Barriers:</span>{" "}
            {data?.accessBarriers || "N/A"}
          </p>
          <p>
            <span className="font-medium">Use Barriers:</span>{" "}
            {data?.useBarriers || "N/A"}
          </p>
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          ✅ Recommendations
        </h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-medium">For Access:</span>{" "}
            {data?.accessRecommendations || "N/A"}
          </p>
          <p>
            <span className="font-medium">For Use:</span>{" "}
            {data?.useRecommendations || "N/A"}
          </p>
        </div>
      </div>

      {/* Responsible Person */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          👤 Responsible Person
        </h3>
        <p className="text-sm text-gray-700">{data?.responsiblePerson}</p>
      </div>

      {/* Source */}
      {data?.source && (
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-3">📖 Source</h3>
          <p className="text-sm text-gray-700">{data?.source}</p>
        </div>
      )}

      {/* Comment */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          💬 Community Comment
        </h3>
        <p className="text-sm text-gray-700 italic">“{data?.comment}”</p>
      </div>
    </div>
  );
}
