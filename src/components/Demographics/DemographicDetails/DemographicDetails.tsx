import PageLayout from "@/components/Common/PageLayout";
import { useDemo } from "@/components/context/DemographicsContext";
import { useNavigate, useParams } from "react-router";
// import PlusIcon from "../../../assets/plus-solid.svg";
import { MdArrowBackIos } from "react-icons/md";
import { useState } from "react";
import ProgramAnalysis from "../ProgramAnalysis/ProgramAnalysis";
// import ProgramDetails from "../ProgramAnalysis/ProgramDetails";
import LogisticsAndSupplies from "../LogisticsAndSupplies/LogisticsAndSupplies";
// import LogisticsDetails from "../LogisticsAndSupplies/LogisticsDetails";
// import SyringeRequirements from "../LogisticsAndSupplies/VaccinsNeeded";
// import DemographicSummary from "./DemographicSummary";
import SocialMappingForm from "@/components/SocialMapping/SocialMappingForm";
// import SocialMappingSummary from "@/components/SocialMapping/SocialMappingSummary";
import SessionPlanForm from "../SessionPlanning/SessionPlanForm";
import AuthWrapper from "@/components/Common/AuthWrapper";
import { UserTypeEnum } from "@/types/enum";
import moment from "moment";

const DemographicDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { demographicData } = useDemo();
  const data = demographicData[Number(id)];
  const [openProgramAnalysis, setOpenProgramAnalysis] = useState(false);
  const [openSocialMapping, setOpenSocialMapping] = useState(false);
  const [openLogistics, setOpenLogistics] = useState(false);
  const [openSessionPlanning, setOpenSessionPlanning] = useState(false);

  const navigate = useNavigate();

  return (
    <PageLayout>
      <AuthWrapper
        allowedTypes={[UserTypeEnum.ENUMERATOR, UserTypeEnum.DESK_USER]}
      >
        {!openSessionPlanning ? (
          !openSocialMapping ? (
            !openLogistics ? (
              !openProgramAnalysis ? (
                <div className="max-w-3xl mx-auto p-6 gap-8">
                  <button
                    onClick={() => navigate(-1)}
                    className="mb-6 inline-flex items-center px-4 py-2 md:bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium rounded-xl transition"
                  >
                    <MdArrowBackIos />
                    <span className="">Back</span>
                  </button>

                  {data && (
                    <div className="space-y-10">
                      {/* <DemographicSummary data={data} /> */}
                      <div className="bg-gray-100 rounded-2xl shadow-sm p-6 space-y-6">
                        <div>
                          <h2 className="text-2xl font-semibold text-gray-800">
                            Health Facility Details
                          </h2>
                          <p className="text-sm text-gray-500 mt-1">
                            {moment(data?.createdAt).format(
                              "MMM D, YYYY [at] h:mm A"
                            )}
                          </p>
                        </div>

                        {/* 🏥 Basic Information */}
                        <div>
                          <h3 className="text-lg font-medium text-gray-700 mb-3">
                            🏥 Facility Information
                          </h3>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm text-gray-700">
                            <p>
                              <span className="font-medium">
                                Facility Name:
                              </span>{" "}
                              {data?.name}
                            </p>
                            <p>
                              <span className="font-medium">Ownership:</span>{" "}
                              {data?.ownership}
                            </p>
                            <p>
                              <span className="font-medium">State:</span>{" "}
                              {data?.state_of_the_health_facility}
                            </p>
                            <p>
                              <span className="font-medium">Type:</span>{" "}
                              {data?.type_of_facility}
                            </p>
                          </div>
                        </div>

                        {/* 📊 Performance Metrics */}
                        <div>
                          <h3 className="text-lg font-medium text-gray-700 mb-3">
                            📊 Facility Performance Metrics
                          </h3>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm text-gray-700">
                            <p>
                              <span className="font-medium">
                                Children Vaccinated:
                              </span>{" "}
                              {data?.no_of_children_vaccinated?.toLocaleString()}
                            </p>
                            <p>
                              <span className="font-medium">
                                Fixed Sessions Conducted:
                              </span>{" "}
                              {data?.no_of_fixed_sessions_conducted?.toLocaleString()}
                            </p>
                            <p>
                              <span className="font-medium">
                                Outreach Sessions Conducted:
                              </span>{" "}
                              {data?.no_of_outreach_sessions_conducted?.toLocaleString()}
                            </p>
                            <p>
                              <span className="font-medium">
                                Teams Deployed:
                              </span>{" "}
                              {data?.no_of_teams_deployed?.toLocaleString()}
                            </p>
                            <p>
                              <span className="font-medium">Vaccinators:</span>{" "}
                              {data?.no_of_vaccinators?.toLocaleString()}
                            </p>
                            <p>
                              <span className="font-medium">
                                Household Members Above 18:
                              </span>{" "}
                              {data?.how_many_household_members_are_above_18?.toLocaleString()}
                            </p>
                          </div>
                        </div>

                        {/* 💉 Campaigns & Supplies */}
                        <div>
                          <h3 className="text-lg font-medium text-gray-700 mb-3">
                            💉 Campaigns & Supplies
                          </h3>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm text-gray-700">
                            <p>
                              <span className="font-medium">
                                Campaigns Conducted:
                              </span>{" "}
                              {data?.no_of_campaigns_conducted?.toLocaleString()}
                            </p>
                            <p>
                              <span className="font-medium">
                                Supervisory Visits:
                              </span>{" "}
                              {data?.no_of_supervisory_visits_conducted?.toLocaleString()}
                            </p>
                            <p>
                              <span className="font-medium">
                                Cold Chain Equipment:
                              </span>{" "}
                              {data?.no_of_cold_chain_equipment?.toLocaleString()}
                            </p>
                            <p>
                              <span className="font-medium">
                                Vaccines Requested:
                              </span>{" "}
                              {data?.no_of_vaccines_requested?.toLocaleString()}
                            </p>
                            <p>
                              <span className="font-medium">
                                Vaccines Supplied:
                              </span>{" "}
                              {data?.no_of_vaccines_supplied?.toLocaleString()}
                            </p>
                            <p>
                              <span className="font-medium">
                                Vaccines Utilized:
                              </span>{" "}
                              {data?.no_of_vaccines_utilized?.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* {!data?.programAnalysis ? (
                        <div className="flex flex-col gap-5 mt-10">
                          <div
                            onClick={() => setOpenProgramAnalysis(true)}
                            className="w-[260px] gap-4 bg-main rounded-lg py-[21px] hover:bg-main/80 transition duration-300 hover:cursor-pointer shadow-main flex items-center justify-center"
                          >
                            <img src={PlusIcon} alt="" />
                            <span className="uppercase text-white text-base lg:text-[18px] font-medium  leading-none tracking-[0.02em]">
                              Program Analysis
                            </span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <ProgramDetails details={data?.programAnalysis} />

                          {!data?.logisticsAndSuppliesData ? (
                            <div className="flex flex-col gap-5 mt-10">
                              <div
                                onClick={() => setOpenLogistics(true)}
                                className="w-[280px] gap-4 bg-main rounded-lg py-[21px] hover:bg-main/80 transition duration-300 hover:cursor-pointer shadow-main flex items-center justify-center"
                              >
                                <img src={PlusIcon} alt="" />
                                <span className="uppercase text-white text-base lg:text-[18px] font-medium  leading-none tracking-[0.02em]">
                                  Logistics & Supplies
                                </span>
                              </div>
                            </div>
                          ) : (
                            <>
                              <LogisticsDetails
                                data={data?.logisticsAndSuppliesData}
                              />
                              <SyringeRequirements
                                data={data?.logisticsAndSuppliesData}
                              />
                              {!data?.socialMappingData ? (
                                <div className="flex flex-col gap-5 mt-10">
                                  <div
                                    onClick={() => setOpenSocialMapping(true)}
                                    className="w-[280px] gap-4 bg-main rounded-lg py-[21px] hover:bg-main/80 transition duration-300 hover:cursor-pointer shadow-main flex items-center justify-center"
                                  >
                                    <img src={PlusIcon} alt="" />
                                    <span className="uppercase text-white text-base lg:text-[18px] font-medium  leading-none tracking-[0.02em]">
                                      Social Mapping
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                <div className="">
                                  <SocialMappingSummary
                                    data={data?.socialMappingData}
                                  />
                                  {!data?.sectionPlanning ? (
                                    <div className="flex flex-col gap-5 mt-10">
                                      <div
                                        onClick={() =>
                                          setOpenSessionPlanning(true)
                                        }
                                        className="w-[280px] gap-4 bg-main rounded-lg py-[21px] hover:bg-main/80 transition duration-300 hover:cursor-pointer shadow-main flex items-center justify-center"
                                      >
                                        <img src={PlusIcon} alt="" />
                                        <span className="uppercase text-white text-base lg:text-[18px] font-medium  leading-none tracking-[0.02em]">
                                          Session Plan
                                        </span>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="">
                                      <SocialMappingSummary
                                        data={data?.socialMappingData}
                                      />
                                    </div>
                                  )}
                                </div>
                              )}
                            </>
                          )}
                        </>
                      )} */}
                    </div>
                  )}
                </div>
              ) : (
                <div className="">
                  <ProgramAnalysis
                    data={data}
                    index={id ?? ""}
                    closeProgram={() => setOpenProgramAnalysis(false)}
                  />
                </div>
              )
            ) : (
              <div className="">
                <LogisticsAndSupplies
                  data={data}
                  index={id ?? ""}
                  close={() => setOpenLogistics(false)}
                />
              </div>
            )
          ) : (
            <div className="">
              <SocialMappingForm
                close={() => setOpenSocialMapping(false)}
                index={id ?? ""}
              />
            </div>
          )
        ) : (
          <div className="">
            <SessionPlanForm
              data={data}
              index={id ?? ""}
              close={() => setOpenSessionPlanning(false)}
            />
          </div>
        )}
      </AuthWrapper>
    </PageLayout>
  );
};

export default DemographicDetails;
