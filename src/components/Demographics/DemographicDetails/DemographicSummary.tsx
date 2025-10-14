/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "@/components/context/AuthContext";
import type { DemographicData } from "@/typings/demographics";
import moment from "moment";

export default function DemographicSummary({
  data,
}: {
  data: DemographicData;
}) {
  const { user } = useAuth();
  return (
    <div className="bg-gray-100 rounded-2xl shadow-sm p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Demographic Details
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          {moment(data?.createdAt).format("MMM D, YYYY [at] h:mm A")}
        </p>
        <p className="text-sm text-gray-500">Status: {data.status}</p>
        <p className="text-sm text-gray-500">Type: {data.type}</p>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">📍 Location</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm text-gray-700">
          <p>
            <span className="font-medium">Region:</span> {user?.region}
          </p>
          <p>
            <span className="font-medium">District:</span> {user?.district}
          </p>
          <p>
            <span className="font-medium">Chiefdom:</span> {user?.chiefdom}
          </p>
          <p>
            <span className="font-medium">Community:</span> {data?.community}
          </p>
          <p>
            <span className="font-medium">PHU:</span> {user?.phu}
          </p>
          <p>
            <span className="font-medium">Village Head:</span>{" "}
            {data?.nameOfVillageHead}
          </p>
          <p>
            <span className="font-medium">Village Head Phone:</span>{" "}
            {data?.phoneNumber}
          </p>
          <p>
            <span className="font-medium">Identity:</span> {data?.identity}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          🏥 Health Facility
        </h3>
        <div className="space-y-1 text-sm text-gray-700">
          <p>
            <span className="font-medium">Available:</span>{" "}
            {data.isFacilityAvailable}
          </p>
          <p>
            <span className="font-medium">Distance:</span>{" "}
            {Number(data.distanceClosestToHealthFacility).toLocaleString()} KM
          </p>
          <p>
            <span className="font-medium">Facilities Count:</span>{" "}
            {data.howManyHealthFacilities}
          </p>
          <p>
            <span className="font-medium">Health Worker:</span>{" "}
            {data.healthWorker} ({data.healthWorkerPhone})
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">🏫 Schools</h3>
        <p className="text-sm">Total: {data.howManySchools}</p>
        <div className="space-y-3 mt-2">
          {data.schools?.map((s: any, i: number) => (
            <div key={i} className="p-3 rounded-lg  shadow-sm">
              <p>
                <span className="font-medium">Name:</span> {s.nameOfSchool}
              </p>
              <p>
                <span className="font-medium">Head Master:</span> {s.headMaster}{" "}
                ({s.headMasterContact})
              </p>
              <p>
                <span className="font-medium">Opportunities:</span>{" "}
                {s.strengthOfOpportunities}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Opinion Leaders */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          👥 Opinion Leaders
        </h3>
        {data.areThereOpinionLeaders === "yes" &&
          data.opinionLeaders?.map((o: any, i: number) => (
            <div key={i} className="p-3 rounded-lg  shadow-sm">
              <p>
                <span className="font-medium">Name:</span> {o.nameOfLeader}
              </p>
              <p>
                <span className="font-medium">Contact:</span>{" "}
                {o.contactOfLeader}
              </p>
              <p>
                <span className="font-medium">Strength:</span>{" "}
                {o.strengthOfWorkingWithLeader}
              </p>
              <p>
                <span className="font-medium">Contribution:</span>{" "}
                {o.potentialContribution}
              </p>
            </div>
          ))}
      </div>

      {/* Faith-Based Institutions */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          ⛪ Faith-Based Institutions
        </h3>
        {data.areThereFaithBasedInstitutions === "yes" &&
          data.faithBasedInstitutions?.map((f: any, i: number) => (
            <div key={i} className="p-3 rounded-lg  shadow-sm">
              <p>
                <span className="font-medium">Institution:</span>{" "}
                {f.nameOfInstitution}
              </p>
              <p>
                <span className="font-medium">Leader:</span> {f.nameOfLeader}
              </p>
              <p>
                <span className="font-medium">Support:</span>{" "}
                {f.strengthAndOpportunities}
              </p>
            </div>
          ))}
      </div>

      {/* Traditional Authorities */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          👑 Traditional Authorities
        </h3>
        {data.areThereTraditionalAuthorities === "yes" &&
          data.traditionalAuthorities?.map((t: any, i: number) => (
            <div key={i} className="p-3 rounded-lg  shadow-sm">
              <p>
                <span className="font-medium">Name:</span> {t.name}
              </p>
              <p>
                <span className="font-medium">Contact:</span> {t.contactDetails}
              </p>
              <p>
                <span className="font-medium">Opportunities:</span>{" "}
                {t.strengthAndOpportunities}
              </p>
            </div>
          ))}
      </div>

      {/* Groups/Organizations */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          🏢 Groups & Organizations
        </h3>
        {data.areThereGroupsOrOrganizations === "yes" &&
          data.groupsOrOrganizations?.map((g: any, i: number) => (
            <div key={i} className="p-3 rounded-lg  shadow-sm">
              <p>
                <span className="font-medium">Name:</span> {g.name}
              </p>
              <p>
                <span className="font-medium">Contact:</span> {g.contactDetails}
              </p>
              <p>
                <span className="font-medium">Opportunities:</span>{" "}
                {g.strengthAndOpportunities}
              </p>
            </div>
          ))}
      </div>

      {/* Influencers */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          🌐 Influencers
        </h3>
        {data.areThereInfluencersOrOpinionLeaders === "yes" &&
          data.influencersOrOpinionLeaders?.map((inf: any, i: number) => (
            <div key={i} className="p-3 rounded-lg  shadow-sm">
              <p>
                <span className="font-medium">Name:</span> {inf.name}
              </p>
              <p>
                <span className="font-medium">Contact:</span>{" "}
                {inf.contactDetails}
              </p>
              <p>
                <span className="font-medium">Opportunities:</span>{" "}
                {inf.strengthAndOpportunities}
              </p>
            </div>
          ))}
      </div>

      {/* Population Summary */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          👨‍👩‍👧 Population Summary
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm text-gray-700">
          <p>
            <span className="font-medium">Total Population:</span>{" "}
            {data.totalPopulation.toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Births:</span>{" "}
            {data.numberOfBirths.toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Surviving Infants:</span>{" "}
            {data.survivingInfants.toLocaleString()}
          </p>
          <p>
            <span className="font-medium">12–23 Months:</span>{" "}
            {data["12To23Months"].toLocaleString()}
          </p>
          <p>
            <span className="font-medium">24–59 Months:</span>{" "}
            {data["24To59Months"].toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Pregnant Women:</span>{" "}
            {data.pregnantWomen.toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Childbearing Age:</span>{" "}
            {data.womenOfChildBearingAge.toLocaleString()}
          </p>
          <p>
            <span className="font-medium">HPV Target:</span>{" "}
            {data.hpvTarget.toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Other MNCH Interventions:</span>{" "}
            {data.otherMNCHInterventions}
          </p>
        </div>
      </div>

      {/* Site Contact */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          📞 Site Contact
        </h3>
        <p className="text-sm text-gray-700">{data.siteContact}</p>
      </div>
    </div>
  );
}
