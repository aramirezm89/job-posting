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
      {user.type === "postulant" ? (
        <>
          <Route path="jobApplicant/:id" element={<JobAplicant />} />
          <Route path="jobs" element={<Jobs />} />

          {/* user */}
          <Route path="user" element={<UserPage />} />

          <Route path="/*" element={<Navigate to={"./user"} />} />
        </>
      ) : (
        <>
          <Route path="jobPosting" element={<JobPostingPage />} />
          <Route path="linkedin" element={<LinkedinPage />} /> */
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobsByRecruiter" element={<MyCreatedJobs />} />
          <Route path="createJob" element={<CreateJob />} />
          {/*  //admin */}
          <Route path="createRecruiter" element={<CreateRecruiter />} />
          <Route
            path="/*"
            element={
              <Navigate to={"./jobs"} />
            }
          />
        </>
      )}
    
     
    </Routes>
  );
}
