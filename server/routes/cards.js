const router = require('express').Router()
const axios = require('axios')

router.get('/', (req, res) => {
  axios.get('https://api.uphold.com/v0/me/cards')
    .then(({ data }) => res.send(data))
})

module.exports = router
