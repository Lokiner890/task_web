import axios, {AxiosInstance} from 'axios';
import ENV from '@/configs';

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 120000,
  baseURL: ENV.BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem('TOKEN');

    if (token && config.headers) {
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;
