const express = require('express');

const { mongoose } = require('../config/db');
const { ListedPotLuckItem, NonListedPotLuckItem } = require('../models/list');
const { Food } = require('../models/foods');

const router = express.Router();

var potLuckList;
router.get('/getPotLuckList', (req, res, next) => {
    ListedPotLuckItem.find()
        .then(item => {
            potLuckList = [...item]
        })
        .catch(e => console.log(e))
    next();
}, (req, res) => {
    NonListedPotLuckItem.find()
        .then(item => {
            potLuckList = [...potLuckList, ...item]
            res.status(200).send(potLuckList);
        })
        .catch(e => res.status(400).send(e))
});

router.post('/addPotLuckItem', (req, res) => {
    let item = new ListedPotLuckItem({
        name: req.body.name,
        item: req.body.item
    });

    item.save()
        .then(it => {
            Food.deleteOne({ item: it.item})
                .then(response => console.log(response))
                .catch(e => console.log(e))
            return res.status(200).send(it)
        })
        .catch(e => res.status(400).send(e))
})

router.delete(':plItem?', (req, res) => {
    ListedPotLuckItem.deleteOne({ item: req.query.plItem })
        .then(response => {
            let food = new Food({
                item: req.query.plItem
            })

            food.save()
                .then(food => console.log({ food }))
                .catch(e => console.log(e))

            return res.status(200).send(response)
        })
        .catch(e => res.status(400).send(e))
})

module.exports = router;