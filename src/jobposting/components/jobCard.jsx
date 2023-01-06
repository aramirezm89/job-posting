import {
  Card,
  CardActions,
  CardContent,
  Typography
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const JobCard = ({ job = {} }) => {

  const { position, description, location, recruiter, type } = job;




  return(
    <>
      <Card sx={{ padding: 2, minWidth:{xs:300,md:500},maxWidth:600}}>
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
            Tipo de empleo: {type}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
          className="linkButton"
            to={`/jobApplicant/${job.id}`}
          >
            POSTULAR
          </Link>
        </CardActions>
      </Card>
    </>
  );
};
