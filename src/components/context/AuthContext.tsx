/* eslint-disable react-refresh/only-export-components */
import { useUser } from "@/hooks/auth";
import type { UserTypeEnum } from "@/types/enum";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { createContext, useContext } from "react";

export interface UserDetails {
  api_key: string;
  api_secret: string;
  username: string;
  email: string;
  roles: string[];
  phone: string | null;
  user_image: string | null;
}
export interface User {
  id: number;
  userId: number;
  email: string;
  profilePicture: string;
  fullName: string;
  full_name: string;
  userType: UserTypeEnum;
  community?: string;
  phoneNumber: string;
  region?: string;
  chiefdom?: string;
  district?: string;
  phu?: string;
  message: string;
  home_page: string;
  status: number;
  user?: UserDetails;
}

interface AuthContextType {
  user: User | null | undefined;
  showUploadModal: boolean;
  setUser: (user: User | null | undefined) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setShowUploadModal: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children?: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { data } = useUser();
  const [user, setUser] = useState<User | null | undefined>(data?.data);

  const [showUploadModal, setShowUploadModal] = useState(false);

  useEffect(() => {
    if (data) {
      setUser(data?.data);
    }
  }, [data]);

  const value: AuthContextType = {
    user: user,
    setUser,
    showUploadModal,
    setShowUploadModal,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
