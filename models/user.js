const { Schema, model } = require('mongoose');

let UserSchema = new Schema({
    password: {
        type: String, 
        default: 'ustcPotluck!'
    }
})

let User = model('User', UserSchema);

module.exports = { User };