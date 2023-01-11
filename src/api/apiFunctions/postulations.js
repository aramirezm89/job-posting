import jobPostingAPi from "../jobPostingApi"


export const getMyPostulations = async (id) =>{
try {
    const res = await jobPostingAPi.get(`/postulation/postulant/${id}`);
    return res;
} catch (error) {
   console.log(error);
   return error;
}
}