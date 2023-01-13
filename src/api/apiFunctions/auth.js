import jobPostingAPi from "../jobPostingApi";

export const recoverPassword = async (email) => {
  try {
    const res = await jobPostingAPi.post("/postulant/requestrecovery", email);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export const updatePassword = async (token,data) =>{
try {
    const res = await jobPostingAPi.post(`/postulant/recovery/${token}`,{data});
    return res;
} catch (error) {
    console.log(error);

    return error;
}
}