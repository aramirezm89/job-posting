import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import jobPostingAPi from "../../api/jobPostingApi";
import { Button, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { useAuthStore } from "../../hooks/useAuthStore";

export const GoogleSigIn = () => {
  const { startLoginGoogle } = useAuthStore();
  const responseGoogle = async (response) => {
    startLoginGoogle(response);
  };

  //clientID app google
  const clientID =
    "513536954643-go3s843ag4nn9ibhvihlbh0qcgkbr3t3.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientID,
        scope: "email",
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  return (
    <>
      <GoogleLogin
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            variant="contained"
            fullWidth
          >
            <Google /> <Typography sx={{ ml: 1 }}>Google</Typography>
          </Button>
        )}
        className="googleButton"
        clientId={clientID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        responseType="id_token permission"
       
      />
    </>
  );
};
