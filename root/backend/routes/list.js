const express = require('express');

const { mongoose } = require('../config/db');
const { List } = require('../models/list');
const { Foods } = require('../models/foods');

const router = express.Router();

router.get('/getList', (req, res) => {
    List.find()
        .then(item => res.status(200).send({ item }))
        .catch(e => res.status(400).send(e))
});

router.post('/addItem', (req, res) => {
    let item = new List({
        name: req.body.name,
        item: req.body.item
    })

    item.save()
        .then(it => {
            Foods.deleteOne({ item: it.item})
                .then(response => res.status(200).send(response))
                .catch(e => res.status(400).send(e))
        })
        .catch(e => res.status(400).send(e))
})

router.delete('/:item', (req, res) => {
    List.deleteOne({ item: req.params.item })
        .then(() => {
            let food = new Foods({
                item: req.params.item
            })

            food.save()
                .then(food => res.status(200).send({ food }))
                .catch(e => res.status(400).send(e))
        })
        .catch(e => res.status(400).send(e))
})

module.exports = router;