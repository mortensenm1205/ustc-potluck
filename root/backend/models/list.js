const mongoose = require('mongoose');
const { Schema, model } = mongoose;

let ListSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    item: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        minlength: 1
    }
})

let List = model('List', ListSchema)

module.export = { List };