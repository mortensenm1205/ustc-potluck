const { Schema, model } = require('mongoose');

let FoodSchema = new Schema({
    item: {
        type: String,
        required: true,
        minlength: 1
    }
})

let Food = model('Food', FoodSchema);


module.exports = { Food };