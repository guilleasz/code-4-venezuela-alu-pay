const router = require('express').Router()
const axios = require('axios')

router.get('/', (req, res) => {
  axios.get('/me/cards')
    .then(({ data }) => res.send(data))
})

module.exports = router
