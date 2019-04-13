const axios = require('axios')
const { UPHOLD_API_URL } = require('./constants')

axios.interceptors.request.use(function (config) {
  // TODO add Bearer Token
  config.baseURL = UPHOLD_API_URL
  return config;
}, function (error) {
  return Promise.reject(error);
});