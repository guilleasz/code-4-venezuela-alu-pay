const axios = require('axios')
const store = require('../redux/store')
const API_HOST = 'localhost:3002'

export const api = axios.create({
  baseURL: API_HOST,
});

api.interceptors.request.use((request) => {
  request.headers.Authorization = store.getState().token
  return request;
}, (error) => {
  return Promise.reject(error);
});