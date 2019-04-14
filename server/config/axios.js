const axios = require('axios')
const { UPHOLD_API_URL } = require('./constants')

exports.api = axios.create({
  baseURL: UPHOLD_API_URL,
})

exports.setHeaders = function (req, res, next) {
  console.log('AUTH', req.headers.authorization)
  exports.api.defaults.headers.Authorization = req.headers.authorization || ''
  next()
}

exports.api.interceptors.response.use(res => {
  console.log('request', res.request._header)
  return res;
}, error => Promise.reject(error));
