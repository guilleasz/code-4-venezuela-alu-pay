const express = require('express')

const contactsRoutes = require('./contacts')
const transactionsRoutes  = require('./transactions')

const router = express.Router()

router.get('/', (req, res) => res.send('Hellow World!'))
router.use('/transactions', transactionsRoutes)
router.use('/contacts', contactsRoutes)

module.exports = router
