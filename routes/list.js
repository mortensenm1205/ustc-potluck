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
    Food.find().then(foods => {
        for (var i = 0; i < foods.length; i++) {
            if (foods[i].item === req.body.item) {
                let listed_item = new ListedPotLuckItem({
                    name: req.body.name,
                    item: req.body.item
                });

                return listed_item.save()
                    .then(it => {
                        Food.deleteOne({ item: it.item })
                            .then(response => console.log(response))
                            .catch(e => console.log(e))
                        res.status(200).send(it)
                    })
                    .catch(e => res.status(400).send(e));
            } else {
                continue
            }
        }
        let non_listed_item = new NonListedPotLuckItem({
            name: req.body.name,
            item: req.body.item
        });

        return non_listed_item.save()
            .then(it => res.status(200).send(it))
            .catch(e => res.status(400).send(e))
    })
})

router.delete(':plItem?', (req, res) => {
    NonListedPotLuckItem.find().then(nonItems => {
        for (var i = 0; i < nonItems.length; i++) {
            if (nonItems[i].item === req.query.plItem) {
                return NonListedPotLuckItem.deleteOne({ item: req.query.plItem})
                    .then(response => res.status(200).send(response))
                    .catch(e => res.status(400).send(e));
            } else { 
                return ListedPotLuckItem.deleteOne({ item: req.query.plItem })
                    .then(response => {
                        let food = new Food({
                            item: req.query.plItem
                        })

                        food.save()
                            .then(food => res.status(200).send({ food }))
                            .catch(e => res.status(400).send(e))

                        console.log(response)
                    })
                    .catch(e => console.log(e))
             }
        }
    })
})

module.exports = router;