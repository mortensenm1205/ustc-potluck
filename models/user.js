const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

let UserSchema = new Schema({
    password: {
        type: String, 
        default: 'ustcPotluck!'
    }
})

UserSchema.methods.setPassHash = function (pass) {
    // get and set for salt and hash
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);
    // updating the password value to the new hash value.
    return this.password = hash;
}

UserSchema.statics.comparePassHash = function(entered_pass, saved_pass) {
    return bcrypt.compareSync(entered_pass, saved_pass);
}

let User = model('User', UserSchema);

module.exports = { User };