import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRotes } from "../auth/routes/AuthRotes";
import { JobPostingRoutes } from "../jobposting/routes/JobPostingRoutes";

export const AppRouter = () => {
  const status = "authenticated"; /* "not-authenticated" */
  return (
    <Routes>
      (
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<AuthRotes />} />
          <Route path="/auth/*" element={<Navigate to="./auth" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<JobPostingRoutes />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
      )
    </Routes>
  );
};
