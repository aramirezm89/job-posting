import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";

export const PruebaGoogleSigIn = () => {
 
  const responseGoogle = (response) => {
    console.log(response);
  };

  //clientID app google
  const clientID ="513536954643-go3s843ag4nn9ibhvihlbh0qcgkbr3t3.apps.googleusercontent.com";

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
        clientId={clientID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};
