import { Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { JobPostingLayout } from '../../jobposting/layout/JobPostingLayout';


const user  = {
  name:'Antonio Ramirez',
  phone:'+56958633523'
}
export const UserPage = () => {
  return (
    <JobPostingLayout>
      <Grid
        container
        sx={{ height: "85vh", display: { md: "flex", xs: "block" } }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} textAlign="center" sx={{ mb: { xs: 2 } }}>
          <Typography
            className="animate__animated
                animate__lightSpeedInLeft"
            variant="h4"
            sx={{ mb: 2 }}
          >
            Datos de usuario
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} md={6} textAlign="center">
          <img
            style={{ width: "50%" }}
            src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png"
            alt="foto"
          />
        </Grid>
        <Grid item md={6} xs={12} textAlign="center">
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Box paddingBottom={2}>
                <Typography gutterBottom>Nombre : {user.name}</Typography>
                <Divider />
              </Box>
              <Box paddingBottom={2}>
                <Typography gutterBottom>Telefono : {user.phone}</Typography>
                <Divider />
              </Box>

              <Box>
                <Typography gutterBottom>Nombre : {user.name}</Typography>
                <Divider />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </JobPostingLayout>
  );
}
