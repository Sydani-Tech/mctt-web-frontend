import React, { useEffect } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import type { UserTypeEnum } from "@/types/enum";

interface AuthWrapperProps {
  allowedTypes: UserTypeEnum[]; // roles allowed to access this component
  children: ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  allowedTypes,
  children,
}) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const userRoles = user?.user?.roles || [];

    // if user has none of the allowed roles, redirect
    const hasAccess = userRoles.some((role: string) =>
      allowedTypes.includes(role as UserTypeEnum)
    );

    if (!hasAccess) {
      navigate("/dashboard");
    }
  }, [user, allowedTypes, navigate]);

  const userRoles = user?.user?.roles || [];
  const hasAccess = userRoles.some((role: string) =>
    allowedTypes.includes(role as UserTypeEnum)
  );

  if (hasAccess) {
    return <>{children}</>;
  }

  return null;
};

export default AuthWrapper;
