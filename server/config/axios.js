const axios = require('axios')
const { UPHOLD_API_URL } = require('./constants')

exports.api = axios.create({
  baseURL: UPHOLD_API_URL,
})

exports.setHeaders = function (req, res, next) {
  api.defaults.headers.Authorization = req.headers.Authorization
  next()
}
