/* eslint-disable @typescript-eslint/no-explicit-any */
import PageLayout from "@/components/Common/PageLayout";
import { useHouseHolds } from "@/components/context/HouseHoldsContext";
import moment from "moment";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import HouseholdMap from "./HouseHoldMap";
import AuthWrapper from "@/components/Common/AuthWrapper";
import { UserTypeEnum } from "@/types/enum";
import { useAuth } from "@/components/context/AuthContext";

const Info = ({ label, value }: { label: string; value: any }) => (
  <div className="flex justify-between text-sm flex-col sm:flex-row">
    <span className="font-medium text-gray-600">{label}:</span>
    <span className="text-gray-900">{value || "N/A"}</span>
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-700 mb-3">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const HouseHoldDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { houseHolds } = useHouseHolds();
  const houseHold = houseHolds[Number(id)];
  const { user } = useAuth();

  return (
    <PageLayout>
      <AuthWrapper allowedTypes={[UserTypeEnum.ENUMERATOR]}>
        <div className="max-w-3xl mx-auto px-4 lg:p-5 gap-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-3 inline-flex px-2 items-center py-2 md:bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium rounded-xl transition"
          >
            <MdArrowBackIos />
            <span className="">Back</span>
          </button>
          <h2 className="text-2xl font-bold text-gray-800 pb-3">
            Household Survey Details
          </h2>

          <Section title="Basic Information">
            <Info label="Enumerator Name" value={user?.fullName} />
            <Info label="Phone Number" value={user?.phoneNumber} />
            <Info label="Community" value={houseHold?.community} />
            <Info label="Village Head" value={houseHold?.villageHeadName} />
            <Info label="House Address" value={houseHold?.houseAddress} />
            <Info
              label="Is House Numbered"
              value={houseHold?.isHouseNumbered}
            />
            <Info label="House Number" value={houseHold?.houseNumber} />
            <Info label="Household Head" value={houseHold?.householdHeadName} />
            <Info label="Head Age" value={houseHold?.householdHeadDob} />
            <Info label="Mother's Name" value={houseHold?.motherName} />
            <Info label="Mother's Age" value={houseHold?.motherDob} />
            <Info label="Has Children" value={houseHold?.areThereChildren} />
            <Info
              label="Has Pregnant Women"
              value={houseHold?.hasPregnantWomen}
            />
            <Info label="Had VPD" value={houseHold?.hadVpd} />
            <Info label="VPD Type" value={houseHold?.vpdType} />
            <Info
              label="Time of visit"
              value={moment(houseHold?.createdAt).format(
                "MMM D, YYYY [at] h:mm A"
              )}
            />
          </Section>

          <div className="flex flex-col gap-5 pt-4">
            {houseHold?.children?.length > 0 && (
              <Section title="Children">
                {houseHold?.children.map((child: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 p-6 rounded-2xl shadow-sm bg-white space-y-2 mb-4"
                  >
                    <Info label="Full Name" value={child.fullName} />
                    <Info label="Date of Birth" value={child.dob} />
                    <Info label="Gender" value={child.gender} />
                    <Info label="Has Card" value={child.hasCard} />
                    <div>
                      <p className="font-medium text-gray-600">Antigens:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {child.antigens.map((antigen: string, i: number) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs"
                          >
                            {antigen}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </Section>
            )}

            {houseHold?.pregnantWomen?.length > 0 && (
              <Section title="Pregnant Women">
                {houseHold?.pregnantWomen.map((woman: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 p-6 rounded-2xl shadow-sm bg-white space-y-2 mb-4"
                  >
                    <Info label="Full Name" value={`${woman.fullName}`} />
                    <Info label="DOB" value={woman.dob} />
                    <Info label="TT Taken" value={woman.ttTaken} />
                  </div>
                ))}
              </Section>
            )}
            <HouseholdMap
              households={houseHolds}
              selectedHousehold={houseHold}
            />
          </div>
        </div>
      </AuthWrapper>
    </PageLayout>
  );
};

export default HouseHoldDetails;
