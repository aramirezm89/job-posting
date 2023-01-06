import jobPostingAPi from "../../api/jobPostingApi";

export const getJobs = async () => {
  try {
    const res = await jobPostingAPi.get("/job");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export const getJobsById = async (id) =>{
  try{
    const res  = await  jobPostingAPi.get(`/job/recruiter:${id}`)
 return res
  }catch (error) {
    console.log(error);
    return error;
  }
}
