import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const JobCard = ({ job = {} }) => {
  const { position, description, location, recruiter, jobType } = job;

  return (
    <>
      <Card sx={{ padding: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {position}
          </Typography>

          <p>{description}</p>

          <p>{location}</p>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Reclutador: {recruiter}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Tipo de empleo: {jobType}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
          className="linkButton"
            to={`/jobApplicant/${job.jobId}`}
          >
            POSTULAR
          </Link>
        </CardActions>
      </Card>
    </>
  );
};
