const express = require('express')

const contactsRoutes = require('./contacts')
const transactionsRoutes  = require('./transactions')
const cardsRoutes = require('./cards')

const router = express.Router()

router.use('/transactions', transactionsRoutes)
router.use('/contacts', contactsRoutes)
router.use('/cards', cardsRoutes)

module.exports = router
