import { Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getJobs } from "../../api/apiFunctions";
import { JobCard } from "../components";
import { JobPostingLayout } from "../layout/JobPostingLayout";


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
          container
          sx={{ width: "100%", height: "100%" }}
          display="flex"
          justifyContent="center"
        >
          <Grid
            item
            sx={{ width: "100%", marginBottom: 3, textAlign: "center" }}
            display="grid"
            xs={12}
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

          <Grid
            item
            display="flex"
            sx={{flexWrap:'wrap'}}
            justifyContent="space-evenly"
            alignItems="start"
            gap={3}
            mb={5}
            xs={12}
          >
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </Grid>
        </Grid>
      </JobPostingLayout>
    </>
  );
};
