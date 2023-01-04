import { useDispatch, useSelector } from "react-redux";
import jobPostingAPi from "../api/jobPostingApi";
import { clearErrorMessage, onCheking, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const startLoginGoogle = async (googleResponse) => {
    try {
      dispatch(onCheking());

      const resLogin = await jobPostingAPi.post("/login", {
        accessToken: googleResponse.tokenId,
      });

      console.log(resLogin);
      const { data } = resLogin;
      localStorage.setItem("token", data.token);

      dispatch(onLogin(data.user));
    } catch (error) {
      console.log(error);
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  //utilizada en AppRouter
  const checkAuthToken = async () => {
    const token =   localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {
      dispatch(onCheking())
      const { data } = await jobPostingAPi.get("/renew",{
        headers:{
          "x-token" : token
        }
      });

      dispatch(onLogin(data.user));

    } catch (error) {
      localStorage.removeItem("token");
 
      console.log(error);
      dispatch(onLogout());
    }
  };
  const startLogoutGoogle = () => {
    try {
      dispatch(onLogout());
      localStorage.removeItem('token')
    } catch (error) {}

    
  };

  return {
    status,
    user,
    errorMessage,
    startLoginGoogle,
    startLogoutGoogle,
    checkAuthToken
  };
};
