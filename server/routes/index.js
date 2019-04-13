const express = require('express')
const contacts = require('./contacts')

const router = express.Router()
router.get('/', (req, res) => res.send('Hellow World!'))

router.use('/contacts', contacts)

module.exports = router
