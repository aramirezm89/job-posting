import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { JobPostingLayout } from "../layout/JobPostingLayout";

export const HomePage = () => {
  return (
    <>
      <JobPostingLayout>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="start"
          sx={{ minHeight: "85vh", width: "100%" }}
        >
          <Grid
            container
            display="grid"
            justifyContent="center"
            sx={{ marginTop: 5 }}
          >
            <Grid item display="grid" justifyContent="center" alignItems="center">
              <Typography variant="h2" color="primary">
                VARIACODE
              </Typography>
            </Grid>

            <Grid item display="grid" justifyContent="center" alignItems="center">
              <Typography variant="p">
                Digital Progress Through Technical Acceleration
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </JobPostingLayout>
    </>
  );
};
