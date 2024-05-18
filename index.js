const express = require('express');
const dbConnection = require('./config/config.js')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000
const routes = require('./routes/routes.js')

app.use(express.json())
app.use('/', routes)

dbConnection()

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})