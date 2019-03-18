const { Strategy } = require('passport-local');
// I got a weird error if i tried to bring in User from the
// User's model file. 
// After some research turns out, it's easier to reference mongoose
// as soon below. It's better to bring in the model via the mongoose object.
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = passport => {
    passport.use(new Strategy((username, password, done) => {
        console.log(username, password);
        User.find({ password })
            .then((user) => {
                console.log(user);
            })
            .catch(err => done(err));
    }));
}