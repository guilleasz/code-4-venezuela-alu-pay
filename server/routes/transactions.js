const router = require('express').Router()
const axios = require('axios')


router.post('/', (req, res) => {
  if(
    !req.body.destinations.length ||
    !req.body.cardId ||
    !req.body.amount
  ) {
    return res.status(403).send('Required params missing')
  }
  const transactions  = req.body.destinations.map(destination => 
    axios.post(`/me/cards/${req.body.cardId}/transactions?commit=true`,{
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

