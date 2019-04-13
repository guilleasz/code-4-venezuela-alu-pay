const express = require('express')
const router = express.Router()
const transactionsRoutes  = require('./transactions')


router.get('/', (req, res) => res.send('Hellow World!'))
router.use('/transactions', transactionsRoutes)

module.exports = router
