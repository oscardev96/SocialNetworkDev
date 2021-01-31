import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://desolate-sands-39457.herokuapp.com',
  timeout: 20000,
});
instance.interceptors.request.use(
  async function (config) {
    let token = await AsyncStorage.getItem('@token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
export default instance;
