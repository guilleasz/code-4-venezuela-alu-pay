const router = require('express').Router()
const axios = require('axios')


router.post('/', (req, res) => {
  const transactions  = req.body.destinations.map(destination => 
    axios.post(`https://api.uphold.com/v0/me/cards/${req.body.cardId}/transactions?commit=true`,{
      denomination: {
        amount: req.body.amount,
        currency: 'USD',
      },
      destination,
    })
  )
  Promise.all(transactions)
    .then(() => res.send(200))
})

module.exports = router

