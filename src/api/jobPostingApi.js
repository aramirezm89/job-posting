import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { REACT_APP_API_URL } = getEnvVariables();

const jobPostingAPi = axios.create({
  baseURL: REACT_APP_API_URL
});

//TODO: configurar interceptores

jobPostingAPi.interceptors.request.use(config =>{
  config.headers = {
    ...config.headers,
    'x-token':localStorage.getItem('token') 
  }
  return config;
})
export default jobPostingAPi;