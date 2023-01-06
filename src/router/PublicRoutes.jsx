
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context";
import { useAuthStore } from "../hooks";

export const PublicRoutes = ({ children }) => {
const {status} = useAuthStore()
  return status === 'not-authenticated' ? children : <Navigate to="/home" />;
};
