import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CreateRecruiter } from '../../admin/pages';
import { GoogleSigIn } from '../../auth/components/GoogleSigIn';
import { RegisterPage } from '../../auth/pages/RegisterPage';
import { CreateJob, HomePage, JobAplicant, JobPostingPage, Jobs, LinkedinPage } from '../pages';



export const JobPostingRoutes = () => {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobPosting" element={<JobPostingPage />} />
      <Route path="/linkedin" element={<LinkedinPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/createJob" element={<CreateJob />} />
      <Route path="/jobApplicant/:id" element={<JobAplicant />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="google" element={<GoogleSigIn />} />

      {/*  //admin */}

      <Route path="/createRecruiter" element={<CreateRecruiter />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}
