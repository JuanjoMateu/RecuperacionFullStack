const express = require('express')
const router = express.Router()
const Contact = require('../models/Model.js')
const ContactController = require('../controllers/ContactControllers.js')

router.get('/', ContactController.getAll)
router.post('/createContact', ContactController.createContact)
router.get('/getAll', ContactController.getAllSSR)
router.get('/id/:_id', ContactController.getContact)
router.put('/id/:_id', ContactController.updateContact)
router.delete('/id/:_id', ContactController.deleteContact)


module.exports = router