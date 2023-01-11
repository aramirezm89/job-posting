import { Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getMyPostulations } from '../../api/apiFunctions'
import { useAuthStore } from '../../hooks'
import { JobCard } from '../../jobposting/components'
import { JobPostingLayout } from '../../jobposting/layout/JobPostingLayout'



export const MyPostulations = () => {

    const {user} = useAuthStore();

      const [postulations, setPostulations] = useState([]);

      useEffect(() =>{
       getMyPostulations(user.id).then(({data}) =>{
        console.log(data)
        setPostulations(data.registros);
       })
      },[])
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
              Mis Postulaciones
            </Typography>
            <Divider />
          </Grid>

          <Grid
            item
            display="flex"
            sx={{ flexWrap: "wrap" }}
            justifyContent="space-evenly"
            alignItems="start"
            gap={3}
            mb={5}
            xs={12}
          >
            {postulations.map((job) => (
              <JobCard key={job.jobid} job={job} />
            ))}
          </Grid>
        </Grid>
      </JobPostingLayout>
    </>
  );
}
