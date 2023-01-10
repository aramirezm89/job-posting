import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const JobCard = ({ job = {} }) => {

  
  const { position, description, location, recruiter, modality } = job;




  return (
    <>
      <Card
        sx={{
          padding: 2,
          minWidth: { xs: 350, md: 500 },
          maxWidth: 550,
          boxShadow:
            "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {position}
          </Typography>
          <Divider />
          <p>{description}</p>

          <p>{location}</p>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Reclutador: {recruiter}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Modalidad: {modality}
          </Typography>
        </CardContent>
        <CardActions>
          <Link className="linkButton" to={`/dashboard/jobApplicant/${job.id}`}>
            POSTULAR
          </Link>
        </CardActions>
      </Card>
    </>
  );
};
