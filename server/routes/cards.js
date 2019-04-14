const router = require('express').Router()
const { api } = require('../config/axios')

router.get('/', (req, res) => {
  api.get('/me/cards')
    .then(({ data }) => res.send(data))
    .catch((err) => {
      res.status(err.response.status)
      res.send(err.response.data)
    })
})

module.exports = router
