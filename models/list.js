const { Schema, model } = require('mongoose');

let PotLuckItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    item: {
        type: String,
        required: true,
        minlength: 1
    }
})

let PotLuckItem = model('Potluck Item', PotLuckItemSchema)

module.exports = { PotLuckItem };