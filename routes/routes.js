const express = require('express')
const router = express.Router()
const Contact = require('../models/Model.js')
const ContactController = require('../controllers/ContactControllers.js')

router.post('/create', ContactController.create)
router.get('/', ContactController.getAll)
router.get('/getAll', ContactController.getAllSSR)

module.exports = router