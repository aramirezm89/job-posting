
import { Navigate } from "react-router-dom";

import { useAuthStore } from "../hooks";

export const PublicRoutes = ({ children }) => {
const {status} = useAuthStore()
 const lastPath = localStorage.getItem("lastPath") || "/dashboard";
  return status === 'not-authenticated' ? children : <Navigate to={lastPath} />;
};
