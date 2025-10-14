import PageLayout from "../Common/PageLayout";
import PendingIcon from "../../assets/clock.svg";
import RecordIcon from "../../assets/record.svg";
import Demographics from "../../assets/demographics.svg";
// import Analytics from "../../assets/analysis.svg";
import Logistics from "../../assets/logistics.svg";
import Doc from "../../assets/document-outline.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import { Link } from "react-router";
import { useDemo } from "../context/DemographicsContext";
import { GiMushroomHouse } from "react-icons/gi";
import { useHouseHolds } from "../context/HouseHoldsContext";
import { useAuth } from "../context/AuthContext";
import { UserTypeEnum } from "@/types/enum";

const Dashboard = () => {
  const { demographicData } = useDemo();
  const { houseHolds } = useHouseHolds();
  const { user } = useAuth();

  const formData = [
    {
      name: "Household",
      text: `Collect information from households in the communities within ${user?.phu} health facility`,
      submissions: houseHolds?.length || 0,
      icon: <GiMushroomHouse color="#0d47a1" />,
      linkTo: "/house-holds",
      userTypes: UserTypeEnum.ENUMERATOR,
    },
    {
      name: "Demographics",
      text: "Collect information from villagers about their demographic information",
      submissions: demographicData?.length || 0,
      icon: <img src={Demographics} alt="demographics" />,
      linkTo: "/demographics",
      userTypes: UserTypeEnum.OIC,
    },
    {
      name: "Problem and challenges",
      text: "Information on challenges in communities, root cause and solutions.",
      submissions: 6,
      icon: <img src={Logistics} alt="logistics" />,
      linkTo: "/root-cause",
      userTypes: UserTypeEnum.EPI,
    },
    {
      name: "Session Planning",
      text: "This is for session planning.",
      submissions: 6,
      icon: <img src={Logistics} alt="session-plan" />,
      linkTo: "/session-planning",
      userTypes: UserTypeEnum.EPI,
    },
    {
      name: "Supervisions",
      text: "This is for supervisions.",
      submissions: 6,
      icon: <img src={Logistics} alt="session-plan" />,
      linkTo: "/supervision",
      userTypes: UserTypeEnum.EPI,
    },
    {
      name: "Annual monitoring",
      text: "This is for annual monitoring.",
      submissions: 6,
      icon: <img src={Logistics} alt="session-plan" />,
      linkTo: "/monitoring",
      userTypes: UserTypeEnum.EPI,
    },
  ];

  const visibleForms = formData.filter((form) =>
    form.userTypes.includes(user?.userType || "")
  );

  const stats = [
    {
      name: "Assigned Forms",
      icon: RecordIcon,
      value: visibleForms.length.toString(),
    },
    {
      name: "Submissions",
      icon: PendingIcon,
      value: houseHolds?.length || "0",
    },
    {
      name: "Approved",
      icon: PendingIcon,
      value: "0",
    },
  ];

  return (
    <PageLayout>
      {/* <FacilityModal isOpen={!locationData || !locationData?.region} /> */}

      <div className="w-full h-full md:bg-white md:px-10 pt-6 md:p-10 flex gap-10 flex-col">
        <div className="grid grid-cols-3 gap-6 lg:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-[2px] border-main/50 rounded-[10.23px] bg-[#F9FCFF] gap-2 md:gap-3 p-3.5 md:p-7 flex items-center flex-col md:flex-row center md:justify-between"
            >
              <div className="gap-2 md:gap-3 order-2 md:order-1  items-center md:items-start flex flex-col">
                <h3 className="text-xs md:text-base text-[#333333] order-2 md:order-1 leading-none tracking-[0.02em]">
                  {stat.name}
                </h3>
                <p className="text-[18px] md:text-2xl order-1 md:order-2 font-bold leading-none tracking-[0.02em]">
                  {stat.value}
                </p>
              </div>
              <div className="size-10 order-1 md:order-2 rounded bg-main/10 flex items-center justify-center">
                <img src={stat.icon} alt={stat.name} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-[18px] text-[#333333] font-bold leading-none tracking-[0.02em]">
            Assigned Forms
          </span>
          <div className="flex flex-col gap-6 lg:gap-10">
            {visibleForms.map((form, index) => (
              <div
                key={index}
                className="shadow-[0px_1px_3px_1px_#00000026,_0px_1px_2px_0px_#0000004D] p-6 rounded-[10px] flex gap-3.5"
              >
                <div className="size-10 rounded bg-main/10 flex items-center justify-center">
                  {form.icon}
                </div>
                <div className="flex flex-col gap-2.5 w-full">
                  <div className="flex flex-col gap-2">
                    <span className="">{form.name}</span>
                    <span className="text-[#333333] text-xs leading-[18px] tracking-[0.02em]">
                      {form.text}
                    </span>
                  </div>
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center gap-1.5">
                      <img src={Doc} alt="Document Icon" className="size-4" />
                      <span className="text-[#4A4A4AB2] text-xs">
                        {form.submissions} Submissions
                      </span>
                    </div>
                    <Link
                      to={form.linkTo ? form.linkTo : "#"}
                      className="size-[30px] rounded-lg bg-main shadow-[0px_1px_3px_1px_#00000026,_0px_1px_2px_0px_#0000004D] flex items-center justify-center"
                    >
                      <img src={ArrowRight} alt="arrow-icon" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
