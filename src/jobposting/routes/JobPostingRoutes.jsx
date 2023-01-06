import React, { useMemo } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { CreateRecruiter } from '../../admin/pages';
import { GoogleSigIn } from '../../auth/components/GoogleSigIn';
import { RegisterPage } from '../../auth/pages/RegisterPage';
import { useAuthStore } from '../../hooks';
import { UserPage } from '../../user/pages/UserPage';
import { CreateJob, HomePage, JobAplicant, JobPostingPage, Jobs, LinkedinPage } from '../pages';
import { JobsByRecruiter } from '../pages/JobsByRecruiter';



export const JobPostingRoutes = () => {
  const { pathname } = useLocation(); //obtiene el path de la url
  const lastPath = useMemo(() => pathname, [pathname]); //guarda el valor de la path y cambia cada vez que la path cambia
  localStorage.setItem("lastPath", lastPath); //guarda valor del path, esta sera utilizada una vez el usuario haya logeado exitosamente
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="jobPosting" element={<JobPostingPage />} />
      <Route path="linkedin" element={<LinkedinPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="createJob" element={<CreateJob />} />
      <Route path="jobApplicant/:id" element={<JobAplicant />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="recruiterJobs" element={<JobsByRecruiter />} />

      {/*  //admin */}
      <Route path="createRecruiter" element={<CreateRecruiter />} />

      {/* user */}
      <Route path="/user" element={<UserPage />} />

      <Route path="/*" element={<Navigate to="/"/>} />
    </Routes>
  );
}
