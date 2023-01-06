import React, { useEffect, useMemo } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useAuthStore } from '../hooks';
import { JobPostingRoutes } from "../jobposting/routes/JobPostingRoutes";
import { CheckingAuthComponent } from "../ui/components";

export const AppRouter = () => {
  const { checkAuthToken, checkAuthPostulantLogin } = useAuthStore();

  useEffect(() => {
   const token = localStorage.getItem('token') || null;
    if(token !==null){
    checkAuthToken();
    }else{
    checkAuthPostulantLogin();
    }


  }, []);

 

  const { status } = useAuthStore();

  if (status === "checking") return <CheckingAuthComponent />;

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JobPostingRoutes  />}  />
      ) : (
        <Route path="auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  );
};
