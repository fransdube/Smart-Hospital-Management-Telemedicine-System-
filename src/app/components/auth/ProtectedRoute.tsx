import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: ("patient" | "doctor" | "admin")[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login but save the current location they were trying to access
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role as any)) {
    // Role not allowed - redirect to a safe page (e.g., their own dashboard or 404)
    const fallbackPath = user.role === "doctor" ? "/doctor/dashboard" : "/patient/dashboard";
    return <Navigate to={fallbackPath} replace />;
  }

  return <>{children}</>;
}
