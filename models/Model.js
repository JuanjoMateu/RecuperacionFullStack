const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        phone: { type: Number, required: true},
        email: { type: String}
        
    }, {timestamps: true}
)

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact