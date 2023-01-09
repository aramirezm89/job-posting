import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CreateRecruiter } from '../../admin/pages';
import { useAuthStore } from '../../hooks';
import { UserPage } from '../../user/pages/UserPage';
import { CreateJob, JobAplicant, JobPostingPage, Jobs, LinkedinPage,MyCreatedJobs } from '../pages';




export const JobPostingRoutes = () => {
    
  const {user} = useAuthStore();

  return (
    <Routes>
      {/*   <Route path="home" element={<HomePage />} /> */}

      <Route path="jobPosting" element={<JobPostingPage />} />
      <Route path="linkedin" element={<LinkedinPage />} />

      <Route
        path="jobApplicant/:id"
        element={
          user.type === "postulant" ? (
            <JobAplicant />
          ) : (
            <Navigate to={"/dashboard/jobs"} />
          )
        }
      />
      <Route path="jobs" element={<Jobs />} />
      <Route path="jobsByRecruiter" element={<MyCreatedJobs />} />

      <Route
        path="createJob"
        element={
          user.type === "recruiter" ? (
            <CreateJob />
          ) : (
            <Navigate to={"/dashboard/jobs"} />
          )
        }
      />
      {/*  //admin */}
      <Route path="createRecruiter" element={<CreateRecruiter />} />

      {/* user */}
      <Route
        path="user"
        element={user.type === "postulant" ? <UserPage /> : <Navigate to="./jobs" />}
      />

      <Route
        path="/"
        element={
          <Navigate to={user.type === "postulant" ? "./user" : "./jobs"} />
        }
      />
    
    </Routes>
  );
}
