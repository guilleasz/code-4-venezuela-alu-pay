const express = require('express')
const router = express.Router()
const transactionsRoutes  = require('./transactions')
const cardsRoutes = require('./cardsRoutes')

router.use('/transactions', transactionsRoutes)
router.use('/cards', cardsRoutes)

module.exports = router
