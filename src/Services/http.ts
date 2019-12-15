import axios from 'axios';
import Config from 'react-native-config';

const API_ROOT = `${Config.HOME_URL}${Config.API_URL}`;

axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 30000;

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

const http = {
  setAuthorizationHeader(accessToken) {
    axios.defaults.headers['x-access-token'] = accessToken;
  },
  request(config = {}) {
    return axios.request(config);
  },
  get(url: string, config = {}) {
    return axios.get(url, config);
  },
  post(url: string, data = {}, config = {}) {
    return axios.post(url, data, config);
  },
  put(url: string, data = {}, config = {}) {
    return axios.put(url, data, config);
  },
  patch(url: string, data = {}, config = {}) {
    return axios.patch(url, data, config);
  },
  delete(url: string, config = {}) {
    return axios.delete(url, config);
  },
};

export default http;
