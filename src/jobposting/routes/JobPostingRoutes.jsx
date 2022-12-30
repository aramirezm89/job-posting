import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CreateRecruiter } from '../../admin/pages';
import { PruebaGoogleSigIn } from '../../admin/pages/PruebaGoogleSigIn';
import { RegisterPage } from '../../auth/pages/RegisterPage';
import { JobPostingPage,JobAplicant,CreateJob,LinkedinPage, Jobs, HomePage } from '../pages'



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
      <Route path="google" element={<PruebaGoogleSigIn />} />

      {/*  //admin */}

      <Route path="/createRecruiter" element={<CreateRecruiter />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}
