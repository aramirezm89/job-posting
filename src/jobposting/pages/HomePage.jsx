import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { JobPostingLayout } from "../layout/JobPostingLayout";
import foto from "../../assets/illustration-concept-abstrait-equipe-dev.webp";
export const HomePage = () => {
  return (
    <>
      <JobPostingLayout>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="start"
          sx={{ minHeight: "85vh", width: "90vw" }}
          gap={2}
        >
          <Grid
            container
            display="grid"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: 5 }}
          >
            <Grid
              item
              xs={12}
              display="grid"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="h2"
                color="primary"
                className="animate__animated
                animate__lightSpeedInLeft"
              >
                VARIACODE
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              display="grid"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="p" sx={{ textAlign: "center" }}>
                Digital Progress Through Technical Acceleration
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              display: {xs:'grid', md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              height: {xs:"500px",md:'300px'},
              width: "90vw",
              backgroundColor: "primary.main",
              color: "white",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              textAlign="center"
              sx={{ display: { xs: "grid" } }}
            >
              <img src={foto} alt="imagen" />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              textAlign="center"
              sx={{ padding: "0 10px", display: { xs: "grid" } }}
            >
              <Typography variant="h5">Our Hystory</Typography>

              <Typography variant="p">
                Established in 2016, we are a leading IT solutions company. We
                enhance digital progress through technical acceleration using
                our tech knowledge and cross-industry experience. Focused on
                quality with agile methodologies and a passion for technology,
                we have collaborated with several companies and brands along the
                road, bringing development, accomplishment, and even investors
                to our clients. Founded by engineers who wanted to boost the
                growth of startups, we’ve created true and long-lasting value in
                every business relationship. With our top-tier engineers, we can
                virtually operate in every single time zone to secure your
                business operations success anytime, anywhere.
              </Typography>
            </Grid>

          </Grid>

          <Grid item xs={12} textAlign="center">
              <Typography variant="h4">Últimas ofertas de empleo</Typography>
          </Grid>
        </Grid>
      </JobPostingLayout>
    </>
  );
};
