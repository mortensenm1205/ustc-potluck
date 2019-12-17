const express = require('express');

const { mongoose } = require('../config/db');
const { Food } = require('../models/foods');
// Here i'm using express router that is then exported and used in my main index.js
const router = express.Router();

// This route is just getting data from my Food model
// And sending the food array back to the client request
router.get('/getFoods', (req, res) => {
    Food.find()
        .then(food => res.status(200).send({ food }))
        .catch(e => res.status(400).send(e))
});

// This route is adding food obj's to our Food model
// We then send the saved food obj back to the client 
router.post('/addFood', (req, res) => {
    // Str mutation the uppercases first letter of req.body.item and applies to more than one value
    let { item } = req.body;
    item = item
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ")
        .trim();

    let food = new Food({
        item
    })

    food.save()
        .then(food => res.status(200).send({ food })) // This 'food' is being sent back to the client
        .catch(e => res.status(400).send(e))
});

// And if we need to delete any existing Food items 
// Then we use this route. It just sends back a deleted response
// which i believe we don't use on the client side
router.delete(':foodItem?', (req, res) => {
    Food.deleteOne({ item: req.query.foodItem })
        .then(deleted_response => res.status(200).send(deleted_response))
        .catch(e => res.status(400).send(e))
})

module.exports = router;