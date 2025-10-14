import PageLayout from "../Common/PageLayout";
import AuthWrapper from "../Common/AuthWrapper";
import { UserTypeEnum } from "@/types/enum";
import { useState } from "react";
import PlusIcon from "../../assets/plus-solid.svg";
import Registration from "./Registration";

const Admin = () => {
  const [openCreate, setOpenCreate] = useState(false);
  return (
    <PageLayout>
      <AuthWrapper allowedTypes={[UserTypeEnum.ADMIN]}>
        <Registration isOpen={openCreate} close={() => setOpenCreate(false)} />
        <div className="w-full flex items-end justify-end">
          <div>
            <button
              type="submit"
              onClick={() => setOpenCreate(true)}
              className="gap-2 flex items-center justify-cener px-4 py-3 bg-main text-[#F5F5F5] font-bold rounded-lg hover:cursor-pointer hover:bg-main/80 transition duration-300"
            >
              <img src={PlusIcon} alt="" />

              <span className="uppercase font-bold">Create user</span>
            </button>
          </div>
        </div>
      </AuthWrapper>
    </PageLayout>
  );
};

export default Admin;
