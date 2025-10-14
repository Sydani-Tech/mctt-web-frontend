import PageLayout from "@/components/Common/PageLayout";
import { useDemo } from "@/components/context/DemographicsContext";
import { useNavigate, useParams } from "react-router";
import PlusIcon from "../../../assets/plus-solid.svg";
import { MdArrowBackIos } from "react-icons/md";
import { useState } from "react";
import ProgramAnalysis from "../ProgramAnalysis/ProgramAnalysis";
import ProgramDetails from "../ProgramAnalysis/ProgramDetails";
import LogisticsAndSupplies from "../LogisticsAndSupplies/LogisticsAndSupplies";
import LogisticsDetails from "../LogisticsAndSupplies/LogisticsDetails";
import SyringeRequirements from "../LogisticsAndSupplies/VaccinsNeeded";
import DemographicSummary from "./DemographicSummary";
import SocialMappingForm from "@/components/SocialMapping/SocialMappingForm";
import SocialMappingSummary from "@/components/SocialMapping/SocialMappingSummary";
import SessionPlanForm from "../SessionPlanning/SessionPlanForm";
import AuthWrapper from "@/components/Common/AuthWrapper";
import { UserTypeEnum } from "@/types/enum";

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
      <AuthWrapper allowedTypes={[UserTypeEnum.OIC]}>
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
                      <DemographicSummary data={data} />
                      {/* <div className="bg-gray-100 rounded-2xl shadow-sm p-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Demographic Details
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {moment(data?.createdAt).format(
                        "MMM D, YYYY [at] h:mm A"
                      )}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">
                      📍 Location
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm text-gray-700">
                      <p>
                        <span className="font-medium">Region:</span>{" "}
                        {locationData?.region}
                      </p>
                      <p>
                        <span className="font-medium">District:</span>{" "}
                        {locationData?.district}
                      </p>
                      <p>
                        <span className="font-medium">Chiefdom:</span>{" "}
                        {locationData?.chiefdom}
                      </p>
                      <p>
                        <span className="font-medium">Community:</span>{" "}
                        {data?.community}
                      </p>
                      <p>
                        <span className="font-medium">PHU:</span>{" "}
                        {locationData?.phu}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">
                      🏥 Health Facility
                    </h3>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>
                        <span className="font-medium">Facility Name:</span>{" "}
                      </p>
                      <p>
                        <span className="font-medium">Available:</span>{" "}
                        {data.isFacilityAvailable}
                      </p>
                      <p>
                        <span className="font-medium">Distance:</span>{" "}
                        {data.distanceClosestToHealthFacility.toLocaleString()}
                        KM
                      </p>
                      <p>
                        <span className="font-medium">Health Worker:</span>{" "}
                        {data.healthWorker} ({data.healthWorkerPhone})
                      </p>
                    </div>
                  </div>

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
                        <span className="font-medium">Pregnant Women:</span>{" "}
                        {data.pregnantWomen.toLocaleString()}
                      </p>
                      <p>
                        <span className="font-medium">Childbearing Age:</span>{" "}
                        {data.womenOfChildBearingAge.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div> */}
                      {!data?.programAnalysis ? (
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
                      )}
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
