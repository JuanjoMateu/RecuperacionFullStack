const mongoose = require('mongoose')

const ModelSchema = new mongoose.Schema(
    {
        title: String,
        completed: Boolean
    }, {timestamps: true}
)

const Model = mongoose.model('Model', ModelSchema)

module.exports = Model