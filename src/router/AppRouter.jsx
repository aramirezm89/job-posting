import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JobPostingRoutes } from "../jobposting/routes/JobPostingRoutes";
import {useAuthStore} from '../hooks';

export const AppRouter = () => {
  
  const {status} = useAuthStore();
  return (
    <Routes>
      {status === "authenticated" 
       
        ?  <Route path="/*" element={<JobPostingRoutes />} />
        :  <Route path="auth/*" element={<AuthRoutes />} />
      }

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
