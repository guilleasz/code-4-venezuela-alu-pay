const express = require('express')
const routes = require('./routes')
const app = express()

app.use(routes)

app.listen(3001, () => console.log('API LISTENING AT PORT 3001'))
