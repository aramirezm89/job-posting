import { Divider, Grid, Typography } from "@mui/material";
import { width } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getJobs } from "../../api/apiFunctions";
import { JobCard } from "../components";
import { JobPostingLayout } from "../layout/JobPostingLayout";

/* const jobs = [
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
]; */
export const Jobs = () => {

  const [jobs,setJobs] = useState([])

  useEffect(() => {
  getJobs().then(({data}) => {
    console.log(data)
    setJobs(data.registros)
  })
  }, [])
  
  return (
    <>
      <JobPostingLayout>
        <Grid
          sx={{ width: "100%" }}
          container
          display="flex"
          justifyContent="center"
        >
          <Grid
            item
            sx={{ width: "100%", marginBottom: 3, textAlign: "center" }}
          >
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h5"
              className="animate__animated
                animate__lightSpeedInLeft"
            >
              Listado Empleos
            </Typography>
            <Divider />
          </Grid>
        </Grid>
        <Grid container display="flex" justifyContent="space-evenly" gap={3}>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Grid>
      </JobPostingLayout>
    </>
  );
};
