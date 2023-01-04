import { Google } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { gapi } from "gapi-script";
import { useEffect, useMemo } from "react";
import { GoogleLogin } from "react-google-login";
import { useAuthStore } from "../../hooks/useAuthStore";

export const GoogleSigIn = () => {
   const {status} = useAuthStore();
    const isAuthenticating = useMemo(() => status === 'checking',[status])
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
            <Google /> <Typography sx={{ ml: 1 }}>VARIACODE</Typography>
          </Button>
        )}
        disabled={isAuthenticating}
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
