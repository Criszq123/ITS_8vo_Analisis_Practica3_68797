import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface RequireAuthProps {
  children: ReactNode; 
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default RequireAuth;