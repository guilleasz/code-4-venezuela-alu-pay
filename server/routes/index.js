var express = require('express')
var router = express.Router()

router.get('/', (req, res) => res.send('Hellow World!'))

module.exports = router
