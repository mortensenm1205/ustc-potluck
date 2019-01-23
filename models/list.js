const { Schema, model } = require('mongoose');

let ListedPotLuckItemSchema = new Schema({
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

let NonListedPotLuckItemSchema = new Schema({
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

let ListedPotLuckItem = model('Listed Potluck Item', ListedPotLuckItemSchema)
let NonListedPotLuckItem = model('NonListed Potluck Item', NonListedPotLuckItemSchema)



module.exports = { ListedPotLuckItem, NonListedPotLuckItem };