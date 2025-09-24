import React from "react";
import { Navigate } from "react-router-dom";
import { useAdmin } from "../../contexts/AdminContext";

const AdminProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, userRole } = useAdmin();

  if (!isAuthenticated || userRole !== "admin") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
