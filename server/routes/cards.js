const router = require('express').Router()

router.get('/', (req, res) => {
  uphold.getCards()
    .then((data) => res.send(data.items))
    .catch(err => res.send(err))
})

module.exports = router
