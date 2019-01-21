const { Schema, model } = require('mongoose');

let ListSchema = new Schema({
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

let List = model('List', ListSchema)

module.exports = { List };