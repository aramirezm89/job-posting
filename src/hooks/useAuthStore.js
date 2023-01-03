import { useDispatch, useSelector } from "react-redux";
import jobPostingAPi from "../api/jobPostingApi";
import { clearErrorMessage, onCheking, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {

  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const startLoginGoogle = async (googleResponse) =>{
    try {
      
      dispatch(onCheking());

       const resLogin = await jobPostingAPi.post("/login", {
        accessToken: googleResponse.tokenId})

        console.log((resLogin))
        const {data} = resLogin;
       localStorage.setItem('tokengoogle',data.token)

      dispatch(onLogin(data.user));
    
    }catch (error) {
      console.log(error);
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  }

   const startLogoutGoogle = () =>{
    try {
      dispatch(onLogout())
    } catch (error) {
      
    }
  }
  
  return{
    status,
    user,
    errorMessage,
    startLoginGoogle,
    startLogoutGoogle
  }
  

};
