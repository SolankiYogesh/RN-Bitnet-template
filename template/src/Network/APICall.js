import Axios from 'axios';
import Utility from '../Helpers/Utility';

const axiosInstance = Axios.create({
  timeout: 30000,
});

axiosInstance.interceptors.request.use(
  config => {
    console.log('axios request config =>', config);
    return config;
  },
  error => {
    console.log('axios request error =>', error);

    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  config => {
    console.log('axios response config =>', config);
    return config;
  },
  error => {
    if (error.response.status === 500) {
      Utility.showToast('Something went wrong');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
