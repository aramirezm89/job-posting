import { Divider, Grid, Typography } from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import { JobCard } from "../components";
import { JobPostingLayout } from "../layout/JobPostingLayout";

const jobs = [
  {
    jobId: 1,
    position: "Ingreniero Node",
    description: "Esta es una descripcion del empleo ",
    location: "Santiago de chile",
    recruiter: "Alberto Jara",
    jobType: "Semi presencial",
  },
  {
    jobId: 2,
    position: "Ingreniero Node",
    description: "Esta es una descripcion del empleo ",
    location: "Santiago de chile",
    recruiter: "Alberto Jara",
    jobType: "Semi presencial",
  },
  {
    jobId: 3,
    position: "Ingreniero Node",
    description: "Esta es una descripcion del empleo ",
    location: "Santiago de chile",
    recruiter: "Alberto Jara",
    jobType: "Semi presencial",
  },
  {
    jobId: 4,
    position: "Ingreniero Node",
    description: "Esta es una descripcion del empleo ",
    location: "Santiago de chile",
    recruiter: "Alberto Jara",
    jobType: "Semi presencial",
  },
  {
    jobId: 5,
    position: "Ingreniero Node",
    description: "Esta es una descripcion del empleo ",
    location: "Santiago de chile",
    recruiter: "Alberto Jara",
    jobType: "Semi presencial",
  },
];
export const Jobs = () => {
  return (
    <>
      <JobPostingLayout>
        <Grid sx={{width:'100%'}} container  display="flex" justifyContent="center" gap={3}>
          <Grid item sx={{width:'100%',marginBottom:3,textAlign:'center'}}>
            <Typography variant="h5">Listado Empleos</Typography>
            <Divider/>
          </Grid>
        </Grid>
        <Grid container display="flex" justifyContent="space-between" gap={3}>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Grid>
      </JobPostingLayout>
    </>
  );
};
