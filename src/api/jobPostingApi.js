import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { REACT_APP_API_URL } = getEnvVariables();

const jobPostingAPi = axios.create({
  baseURL: REACT_APP_API_URL
});

//TODO: configurar interceptores

export default jobPostingAPi;