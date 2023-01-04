import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children }) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
      >
        <Grid item>
           <Typography
                variant="h2"
                 sx={{mb:5,color:'white'}}
                className="animate__animated
                animate__lightSpeedInLeft"
              >
                VARIACODE
              </Typography>
            
        </Grid>
        <Grid
          item
          className="box-shadow"
          xs={3}
          sx={{
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
            width: { md: 500 },
          }}
        >
          {children}
        </Grid>
      </Grid>
    </>
  );
};
