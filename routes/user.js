const express = require('express');
const passport = require('passport'); 
const bcrypt = require('bcryptjs');

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
        password: req.body.password
    });

    user.setPassHash(req.body.password);
    return user.save()
        .then(response => {
            bcrypt.compare(req.body.password, response.password, (err, result) => {
                console.log("RESULT: " + result);
            })
            res.status(200).send(response)
        })
        .catch(err => {
            console.error(err)
            res.status(400).send(err)
        });
});

router.post('/', passport.authenticate('local', { session: false }), (req, res) => {
    console.log(req);
    res.end();
})

module.exports = router;