import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CreateRecruiter } from '../../admin/pages';
import { JobPostingPage,JobAplicant,CreateJob,LinkedinPage, Jobs } from '../pages'



export const JobPostingRoutes = () => {
  
  return (
    <Routes>
      <Route path="/" element={<JobPostingPage />} />
      <Route path="/linkedin" element={<LinkedinPage />} />
      <Route path="/createJob" element={<CreateJob />} />
      <Route path="/jobApplicant/:id" element={<JobAplicant />} />
      <Route path="/jobs" element={<Jobs />} />

      {/*  //admin */}

      <Route path="/createRecruiter" element={< CreateRecruiter/>} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}
