// import PageLayout from "../Common/PageLayout";
import ArrowLeft from "../../../assets/ArrowLeft.svg";
import PlusIcon from "../../../assets/plus-solid.svg";
import FilterIcon from "../../../assets/filter-outline.svg";
// import ExportIcon from "../../assets/export-icon.svg";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
// import { cn } from "@/lib/utils";
// import { IoEye } from "react-icons/io5";
// import { StatusDropdown } from "./StatusDropdown";
// import EmptyForm from "../../assets/empty-form.webp";
// import { useDemo } from "../context/DemographicsContext";
// import moment from "moment";
// import { useApp } from "../context/AppContext";
// import { CiLocationOn } from "react-icons/ci";
// import { useApp } from "@/components/context/AppContext";
import PageLayout from "@/components/Common/PageLayout";
import { StatusDropdown } from "../StatusDropdown";

const SessionPlanning = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("all");
  //   const { demographicData: data } = useDemo();
  //   const filteredData =
  //     filter === "all" ? data : data.filter((item) => item.status === filter);
  return (
    <PageLayout>
      <div className="w-full gap-14 flex flex-col pb-16">
        <div className="flex flex-col gap-6">
          <div
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src={ArrowLeft} alt="arrow-left" />
            <span className="text-main leading-none tracking-[0.02em] text-base lg:text-[18px]">
              Session Planning
            </span>
          </div>
          <div className="shadow-main p-[30px] flex flex-col gap-[30px] rounded-xl">
            {/* <span className="text-sm lg:text-[18px] text-[#333333] leading-[24px]">
              Session planning
            </span> */}
            <div className="flex  flex-col md:flex-row gap-6 md:gap-10 w-full items-center">
              <div className="flex flex-row gap-6 md:gap-10 w-full lg:w-1/2 items-center">
                <div className="bg-main/10 px-3 md:px-7 py-2.5 rounded-lg flex flex-col w-1/2">
                  <span className="uppercase text-sm text-[#333333]">
                    assigned
                  </span>
                  <span className="text-[#333333] text-base lg:text-[18px] font-medium">
                    Aug 14, 2025
                  </span>
                </div>
                <div className="bg-main/10 px-3 md:px-7 py-2.5 rounded-lg flex flex-col w-1/2">
                  <span className="uppercase text-sm text-[#333333]">
                    deadline
                  </span>
                  <span className="text-[#BD3839] text-base lg:text-[18px] font-medium">
                    Nov 14, 2025
                  </span>
                </div>
              </div>
              <Link
                to={"/session-planning/form"}
                className="w-full lg:w-1/2 gap-4 bg-main rounded-lg py-[21px] hover:bg-main/80 transition duration-300 hover:cursor-pointer shadow-main flex items-center justify-center"
              >
                <img src={PlusIcon} alt="" />
                <span className="uppercase text-white text-base lg:text-[18px] font-medium  leading-none tracking-[0.02em]">
                  fill new form
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[25px]">
          <div className="flex items-center justify-between px-4 lg:px-[30px]">
            <div className="flex flex-row items-center md:items-start justify-between md:justify-start w-full md:w-auto md:flex-col gap-2">
              <span className="ext-base lg:text-[18px] font-medium  leading-none tracking-[0.02em] text-[#333333]">
                Previous Submissions
              </span>
              <span className="text-[#4A4A4AB2] text-xs">
                {/* {data.length} total */}
              </span>
            </div>
            <div className="hidden md:flex flex-row gap-3">
              <StatusDropdown filter={filter} setFilter={setFilter} />

              <img src={FilterIcon} alt="" />
            </div>
          </div>
          {/* {filteredData && filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 p-4 lg:p-[30px] bg-[#F9FCFF] shadow-light rounded-xl "
              >
                <div
                  className="shadow-light flex flex-col gap-3 md:flex-row md:items-center justify-between bg-[#F9FCFF] rounded-[10px] p-4 lg:p-6"
                  key={index}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center md:items-start justify-between md:justify-start">
                      <div className="text-base truncate flex gap-1 lg:text-[18px] font-medium leading-none tracking-[0.02em]">
                        <span>{locationData?.phu} </span>
                        <span
                          className={cn(
                            "py-0.5 px-2.5 md:block hidden rounded-[24px] capitalize text-xs",
                            item.status === "approved" &&
                              "bg-[#DAFDE7] text-[#009561]",
                            item.status === "pending" &&
                              "bg-[#FFECD7] text-[#EC530D]",
                            item.status === "rejected" &&
                              "bg-[#FEEFF2] text-[#BD3839]"
                          )}
                        >
                          {item.status}
                        </span>
                      </div>
                      <span
                        className={cn(
                          "py-1 px-2.5 md:hidden rounded-[24px] capitalize text-xs",
                          item.status === "approved" &&
                            "bg-[#DAFDE7] text-[#009561]",
                          item.status === "pending" &&
                            "bg-[#FFECD7] text-[#EC530D]",
                          item.status === "rejected" &&
                            "bg-[#FEEFF2] text-[#BD3839]"
                        )}
                      >
                        {item.status}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex text-gray-700 truncate items-center flex gap-1">
                        <CiLocationOn />

                        <span className="text-nowrap">{item.community}</span>
                      </div>
                    </div>
                    <span className="text-[#33333380] pt-2 text-sm">
                      Submitted on{" "}
                      {moment(item?.createdAt).format(
                        "MMM D, YYYY [at] h:mm A"
                      )}
                    </span>
                  </div>
                  <div className="flex gap-4 items-center ">
                    <Link
                      to={`/demographics/details/${index}`}
                      className="w-full md:w-[124px] items-center justify-center flex flex-row text-main rounded-lg hover:cursor-pointer hover:bg-main/5 transition duration-300 bg-main/10 border border border-main/50 gap-3 px-4 py-3"
                    >
                      <IoEye />
                      <span className="">View</span>
                    </Link>
                    <div className="w-full md:w-[124px] items-center justify-center flex flex-row text-[#F5F5F5] rounded-lg hover:cursor-pointer hover:bg-main/80 transition duration-300 bg-main border border border-main/50 gap-3 px-4 py-3">
                      <img src={ExportIcon} alt="export-icon" />
                      <span className="">Export</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center flex-col py-14 justify-center gap-4">
              <img src={EmptyForm} className="size-64 rounded-xl" alt="" />
              {filter === "all" ? (
                <h2 className="font-medium">No Demographic form submitted</h2>
              ) : (
                <h2 className="font-medium">No {filter} forms found</h2>
              )}
              <Link
                to={"/demographics/form"}
                className="mt-4 px-6 gap-4 bg-main rounded-lg py-[21px] hover:bg-main/80 transition duration-300 hover:cursor-pointer shadow-main flex items-center justify-center"
              >
                <img src={PlusIcon} alt="" />
                <span className="uppercase text-white text-base lg:text-[18px] font-medium  leading-none tracking-[0.02em]">
                  Add form
                </span>
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </PageLayout>
  );
};

export default SessionPlanning;
