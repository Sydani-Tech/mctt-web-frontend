import React, { useEffect } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import type { UserTypeEnum } from "@/types/enum";
interface AuthWrapperProps {
  allowedTypes: UserTypeEnum[];
  children: ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  allowedTypes,
  children,
}) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    if (!user?.userType || !allowedTypes.includes(user?.userType ?? "")) {
      navigate("/dashboard");
    }
  }, [user, allowedTypes, navigate]);

  if (user?.userType && allowedTypes.includes(user.userType)) {
    return <>{children}</>;
  }

  return null;
};

export default AuthWrapper;
