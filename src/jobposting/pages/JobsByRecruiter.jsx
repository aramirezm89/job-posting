import { Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getJobs, getJobsById } from "../../api/apiFunctions";
import { useAuthStore } from "../../hooks";
import { JobCard } from "../components";
import { JobPostingLayout } from "../layout/JobPostingLayout";

export const JobsByRecruiter = () => {
  const [jobs, setJobs] = useState([]);
  const {user} = useAuthStore();
  useEffect(() => {
  
    getJobsById(user.id).then(({ data }) => {
     console.log(data)
      setJobs(data.registros);
    });
  }, []);

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
              Tablero de Empleos
            </Typography>
            <Divider />
          </Grid>
        </Grid>
        <Grid
          container
          display="flex"
          justifyContent="space-evenly"
          gap={3}
          mb={5}
        >
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Grid>
      </JobPostingLayout>
    </>
  );
};
