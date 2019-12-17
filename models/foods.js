const { Schema, model } = require('mongoose');

// Simple Food model that accepts one value
// Using model then in the foods route
let FoodSchema = new Schema({
    item: {
        type: String,
        required: true,
        minlength: 1
    }
})

let Food = model('Food', FoodSchema);


module.exports = { Food };