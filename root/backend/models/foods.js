const { Schema, model } = require('mongoose');

let FoodsSchema = new Schema({
    item: {
        type: String,
        required: true,
        minlength: 1
    }
})

let Foods = model('Foods', FoodsSchema);


module.exports = { Foods };