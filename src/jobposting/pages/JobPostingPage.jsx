import { Button } from '@mui/material';
import React from 'react';
import jobPostingAPi from '../../api/jobPostingApi';

import { JobPostingLayout } from '../layout/JobPostingLayout';

export const JobPostingPage = () => {

  const getCodeLinkedin = () =>{
   try {
    const response = jobPostingAPi.post("/auth");
    console.log(response);
   } catch (error) {
    console.log(error)
   }
  }

  return (
  <JobPostingLayout>
      <Button onClick={getCodeLinkedin} >Prueba</Button>
  </JobPostingLayout>
  );
}
