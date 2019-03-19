const express = require('express');
const passport = require('passport'); 

const { mongoose } = require('../config/db');
const { User } = require('../models/user');

const router = express.Router();

// This route won't be used on the front end
// It's really to test if an empty password
// field will have the default schema value
// kick in and then be hashed before saving to the 
// collection. 
router.post('/new', (req, res) => {
    let user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.setPassHash(req.body.password);
    return user.save()
        .then(response => res.status(200).send(response))
        .catch(err => {
            console.error(err)
            res.status(400).send(err)
        });
});

router.post('/', passport.authenticate('local', { session: false }), (req, res) => {
    if(req.user) res.status(200).json({ success: true });
})

module.exports = router;