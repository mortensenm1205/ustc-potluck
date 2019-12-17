const { Schema, model } = require('mongoose');

// Two models doing the same thing
// Just used differently based on the Foods model
// You'll see this in list route.
let ListedPotLuckItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    item: {
        type: String,
        required: true,
        minlength: 1, 
        unique: true
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
        minlength: 1,
        unique: true
    }
})

let ListedPotLuckItem = model('Listed Potluck Item', ListedPotLuckItemSchema)
let NonListedPotLuckItem = model('NonListed Potluck Item', NonListedPotLuckItemSchema)



module.exports = { ListedPotLuckItem, NonListedPotLuckItem };