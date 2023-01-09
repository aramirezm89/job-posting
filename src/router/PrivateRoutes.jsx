import React, { useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuthStore } from "../hooks";

export const PrivateRoute = ({ children }) => {


  const { status } = useAuthStore();

  const { pathname } = useLocation(); //obtiene el path de la url
  const lastPath = useMemo(() => pathname, [pathname]); //guarda el valor de la path y cambia cada vez que la path cambia
  localStorage.setItem("lastPath", lastPath); //guarda valor del path, esta sera utilizada una vez el usuario haya logeado exitosamente

  return status === "authenticated" ? children : <Navigate to="/" />;
};
