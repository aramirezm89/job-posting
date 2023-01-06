import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import jobPostingAPi from "../api/jobPostingApi";
import {
  clearErrorMessage,
  onCheking,
  onLogin,
  onLogout,
} from "../store/auth/authSlice";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startLoginGoogle = async (googleResponse) => {
    try {
      dispatch(onCheking());

      const resLogin = await jobPostingAPi.post("/recruiter/googleAuth", {
        accessToken: googleResponse.tokenId,
      });

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

  const startLoginUser = async (credenciales) => {
    try {
      dispatch(onCheking());
      const { data } = await jobPostingAPi.post(
        "/postulant/login",
        credenciales
      );
      const lastPath = localStorage.getItem("lastPath") || "/";
      localStorage.setItem("postulant", JSON.stringify(data.user));
      dispatch(onLogin(data.user));
      navigate(lastPath, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const checkAuthPostulantLogin = () => {
    const token = localStorage.getItem("postulant") || null;
    if (token === null) return dispatch(onLogout());
    dispatch(onCheking());
    const lastPath = localStorage.getItem("lastPath") || "/";
    const user = JSON.parse(localStorage.getItem("postulant")) || null;

    if (user !== null) {
      dispatch(onLogin(user));
      navigate(lastPath, { replace: true });
    } else {
      dispatch(onLogout());
    }
  };
  //utilizada en AppRouter
  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {
      dispatch(onCheking());
      const lastPath = localStorage.getItem("lastPath") || "/";
      const { data } = await jobPostingAPi.get("/renew/recruiter", {
        headers: {
          "x-token": token,
        },
      });

      navigate(lastPath, { replace: true });
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
      localStorage.removeItem("token");
      localStorage.removeItem("postulant");
    } catch (error) {}
  };

  return {
    status,
    user,
    errorMessage,
    startLoginGoogle,
    startLoginUser,
    startLogoutGoogle,
    checkAuthToken,
    checkAuthPostulantLogin,
  };
};
