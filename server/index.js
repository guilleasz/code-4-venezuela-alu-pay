const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const { setHeaders } = require('./config/axios')

const app = express()

app.use(bodyParser.json())
app.use(setHeaders)
app.use(routes)

app.listen(3001, () => console.log('API LISTENING AT PORT 3001'))
