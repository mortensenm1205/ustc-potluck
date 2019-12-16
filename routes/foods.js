const express = require('express');

const { mongoose } = require('../config/db');
const { Food } = require('../models/foods');

const router = express.Router();

router.get('/getFoods', (req, res) => {
    Food.find()
        .then(food => res.status(200).send({ food }))
        .catch(e => res.status(400).send(e))
});

// This will become a protected route later on.
router.post('/addFood', (req, res) => {
    // Str mutation the uppercases first letter of req.body.item and applies to more than one value
    let { item } = req.body;
    item = item
        .toLowerCase()
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");

    let food = new Food({
        item
    })

    food.save()
        .then(food => res.status(200).send({ food }))
        .catch(e => res.status(400).send(e))
});

router.delete(':foodItem?', (req, res) => {
    Food.deleteOne({ item: req.query.foodItem })
        .then(deleted_response => res.status(200).send(deleted_response))
        .catch(e => res.status(400).send(e))
})

module.exports = router;