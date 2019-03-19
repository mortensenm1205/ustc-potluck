const express = require('express');
const passport = require('passport'); 

const { mongoose } = require('../config/db');
const { User } = require('../models/user');

const router = express.Router();

// This route won't be used on the front end
// Just used for testing on creating a user.
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