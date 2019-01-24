const express = require('express');

const { mongoose } = require('../config/db');
const { ListedPotLuckItem, NonListedPotLuckItem } = require('../models/list');
const { Food } = require('../models/foods');

const router = express.Router();

function getPotLuckData(req, res) {
    let potLuckList = [];
    return ListedPotLuckItem.find()
        .then(item => {
            potLuckList = [...item]
            return potLuckList
        })
        .then(plList => {
            return NonListedPotLuckItem.find()
                .then(item => {
                    potLuckList = [...plList, ...item]
                    res.status(200).send(potLuckList);
                })
            })
            .catch(e => console.log(e))
}

router.get('/getPotLuckList', (req, res) => {
    getPotLuckData(req, res)
});

router.post('/addPotLuckItem', (req, res) => {
    Food.find().then(foods => {
        for (var i = 0; i < foods.length; i++) {
            if (foods[i].item === req.body.item) {
                let listed_item = new ListedPotLuckItem({
                    name: req.body.name,
                    item: req.body.item
                });

                listed_item.save()
                    .then(it => {
                        Food.deleteOne({ item: it.item })
                            .then(response => console.log(response))
                            .catch(e => console.log(e))
                    })
                    .catch(e => res.status(400).send(e));
                return getPotLuckData(req, res)
            } else {
                continue
            }
        }
        let non_listed_item = new NonListedPotLuckItem({
            name: req.body.name,
            item: req.body.item
        });

        non_listed_item.save()
            .then(it => console.log(it))
            .catch(e => res.status(400).send(e))

        return getPotLuckData(req, res)
    })
})

router.delete(':plItem?', (req, res) => {
    NonListedPotLuckItem.find().then(nonItems => {
        // This handles if Non Listed Array data is already/was empty.
        if (nonItems.length === 0) {
            return ListedPotLuckItem.deleteOne({ item: req.query.plItem })
                .then(response => {
                    let food = new Food({
                        item: req.query.plItem
                    })

                    food.save()
                        .then(food => getPotLuckData(req, res))
                        .catch(e => res.status(400).send(e))
                })
                .catch(e => console.log(e))
        }

        for (var i = 0; i < nonItems.length; i++) {
            if (nonItems[i].item === req.query.plItem) {
                return NonListedPotLuckItem.deleteOne({ item: req.query.plItem})
                    .then(response => getPotLuckData(req, res))
                    .catch(e => res.status(400).send(e));
            } else { 
                return ListedPotLuckItem.deleteOne({ item: req.query.plItem })
                    .then(response => {
                        let food = new Food({
                            item: req.query.plItem
                        })

                        food.save()
                            .then(food => getPotLuckData(req, res))
                            .catch(e => res.status(400).send(e))
                    })
                    .catch(e => console.log(e))
             }
        }
    })
})

module.exports = router;