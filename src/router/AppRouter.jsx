import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JobPostingRoutes } from "../jobposting/routes/JobPostingRoutes";

export const AppRouter = () => {
  const status = "authenticated"; /* "not-authenticated" */
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JobPostingRoutes/>} />
      ) : (
        <Route path="auth/" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
