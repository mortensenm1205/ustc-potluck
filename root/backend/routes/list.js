const express = require('express');

const { mongoose } = require('../config/db');
const { PotLuckItem } = require('../models/list');
const { Food } = require('../models/foods');

const router = express.Router();

router.get('/getPotLuckList', (req, res) => {
    PotLuckItem.find()
        .then(item => res.status(200).send({ item }))
        .catch(e => res.status(400).send(e))
});

router.post('/addPotLuckItem', (req, res) => {
    let item = new PotLuckItem({
        name: req.body.name,
        item: req.body.item
    })

    item.save()
        .then(it => {
            Food.deleteOne({ item: it.item})
                .then(response => res.status(200).send(response))
                .catch(e => res.status(400).send(e))
        })
        .catch(e => res.status(400).send(e))
})

router.delete('/:potluckItem', (req, res) => {
    PotLuckItem.deleteOne({ item: req.params.potluckItem })
        .then(() => {
            let food = new Food({
                item: req.params.item
            })

            food.save()
                .then(food => res.status(200).send({ food }))
                .catch(e => res.status(400).send(e))
        })
        .catch(e => res.status(400).send(e))
})

module.exports = router;