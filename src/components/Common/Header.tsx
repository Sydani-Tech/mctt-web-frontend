import { useState } from "react";
import Sync from "../../assets/jam_refresh.svg";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { useOnlineStatus } from "@/hooks/useOnline";
import { IoMdLogOut } from "react-icons/io";
import { useLogout } from "@/hooks/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Header = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { mutate: logout, isPending } = useLogout();
  const { user, setUser } = useAuth();
  const firstName = user?.fullName.split(" ")[0];
  const isOnline = useOnlineStatus();
  const handleSync = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
    logout();
  };

  return (
    <div className="bg-[#F9FCFF] block md:shadow-[0px_1px_3px_1px_#00000026,_0px_1px_2px_0px_#0000004D] px-4 lg:px-20 py-6">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-main text-xl font-medium tracking-wide">
            Hello, {firstName}!
          </h1>
          <div className="md:hidden flex text-gray-700 truncate items-center flex gap-1">
            <MdOutlineHealthAndSafety className="text-main" />
            <div className="text-sm flex items-center">
              <span className="text-nowrap">{user?.phu}</span>
            </div>
          </div>
          <div className="md:block hidden space-y-1">
            <p className="text-main-gray text-base">
              Here's what's happening with your data collection today
            </p>
            <div className="flex text-gray-700 truncate items-center flex gap-1">
              <MdOutlineHealthAndSafety className="text-main" />
              <div className="text-sm flex items-center">
                <span className="text-nowrap">{user?.phu}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div
            className="text-sm text-main"
            style={{
              padding: "10px",
              width: "fit-content",
            }}
          >
            {isOnline ? (
              <div className="flex text-nowrap gap-1">
                🟢 <span className="">Online</span>
              </div>
            ) : (
              <div className="flex text-nowrap gap-1">
                🔴 <span className="">Offline</span>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSync}
              className={`bg- hover:bg-gray-50 flex gap-1 px-2.5 items-center rounded-lg text-main-gray shadow-[0px_1px_3px_1px_#00000026,_0px_1px_2px_0px_#0000004D] p-1.5 ${
                refreshing ? "opacity-75" : ""
              }`}
            >
              <img
                src={Sync}
                className={`size-5 text-main ${
                  refreshing ? "animate-spin" : ""
                }`}
                alt=""
              />
              <span className="md:block hidden">Sync</span>
            </button>
            {isPending ? (
              <div className="w-[46px] lg:w-[106px] items-center flex justify-center">
                <span className="loader_spinner2"></span>
              </div>
            ) : (
              <div
                onClick={handleLogout}
                className="flex bg-main hover:bg-main/80 hover:cursor-pointer transition duration rounded-lg px-2 md:px-3 py-1.5 md:py-2 text-white items-center gap-1"
              >
                <IoMdLogOut size={22} />
                <span className="hidden lg:block font-medium text-sm">
                  Sign Out
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
