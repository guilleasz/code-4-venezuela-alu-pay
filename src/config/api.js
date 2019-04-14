import axios from 'axios'
import store from '../redux/store'

const API_HOST = 'http://localhost:3001'

const api = axios.create({
  baseURL: API_HOST,
});

api.interceptors.request.use((request) => {
  request.headers.Authorization = store.getState().token
  return request;
}, (error) => {
  return Promise.reject(error);
});


export default api
