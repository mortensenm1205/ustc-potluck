const express = require('express');

const { mongoose } = require('../config/db');
const { Foods } = require('../models/foods');

const router = express.Router();

router.post('/', (req, res) => {
    let food = new Foods({
        item: req.body.item
    })

    food.save()
        .then(food => res.status(200).send({ food }))
        .catch(e => res.status(400).send(e))
});


module.exports = router;