const express = require('express')
const router = express.Router()
const Model = require('../models/Model.js')

router.get('/', (req, res) => {res.send('Lista de contactos de dentro de las rutas')})

module.exports = router