import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const AuthLayout = ({ children }) => {

  const navigate = useNavigate();
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
                 sx={{mb:5,color:'white',cursor:'pointer'}}
                className="animate__animated
                animate__lightSpeedInLeft"
                onClick={() => navigate('/home')}
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
