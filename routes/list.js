const express = require('express');

const { mongoose } = require('../config/db');
const { ListedPotLuckItem, NonListedPotLuckItem } = require('../models/list');
const { Food } = require('../models/foods');

const router = express.Router();

router.get('/getPotLuckList', (req, res) => {
    var potLuckList = [];
    ListedPotLuckItem.find()
      .then(item => {
        potLuckList = [...item];
        return potLuckList;
      })
      .then(plList => {
        return NonListedPotLuckItem.find().then(item => {
          potLuckList = [...plList, ...item];
          res.status(200).send(potLuckList);
        });
      })
      .catch(e => res.status(400).send(e));
});

router.post('/addPotLuckItem', (req, res) => {

    if((req.body.name === undefined && req.body.item === undefined) || req.body.item === undefined) {
      return res.status(400).send({
        message: "Uh oh! You didn't enter anything, enter a name and item before submitting"
      })
    }

    // Str mutation that handles single letter uppercase for req.body name and item, and if values are more than one word
    let { name, item } = req.body;
    name = name.split(" ").map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
    item = item.split(" ").map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
    Food.find().then(foods => {
        for (var i = 0; i < foods.length; i++) {
            if (foods[i].item === item) {
                let listed_item = new ListedPotLuckItem({
                    name,
                    item
                });

                return listed_item.save()
                    .then(listed_obj => {
                        Food.deleteOne({ item: listed_obj.item })
                          .then(deleted_response => {
                            console.log(deleted_response);
                            res.status(200).send({ listed_obj });
                          })
                          .catch(e => res.status(400).send(e));
                        })
                    .catch(e => res.status(400).send(e));
            } else {
                continue
            }
        }
        let non_listed_item = new NonListedPotLuckItem({
            name,
            item
        });

        return non_listed_item.save()
            .then(non_listed_obj => res.status(200).send({ non_listed_obj }))
            .catch(e => res.status(400).send(e))

    })
})

router.delete(':plItem?', (req, res) => {
    NonListedPotLuckItem.find().then(nonItems => {
        // This handles if Non Listed Array data is already/was empty.
        if (nonItems.length === 0) {
            ListedPotLuckItem.deleteOne({ item: req.query.plItem })
                .then(deleted_response => {
                    let food = new Food({
                        item: req.query.plItem
                    })

                    food
                      .save()
                      .then(new_food_item => {
                        console.log("deleted_response: ", deleted_response);
                        console.log("new_food_item: ", new_food_item);
                      })
                      .catch(e => res.status(400).send(e));
                })
                .catch(e => res.status(400).send(e))
            // We still need the removed listed object to be sent
            // as a response so that we can remove it in redux 
            return ListedPotLuckItem.find({ item: req.query.plItem })
                        .then(listed_obj => res.status(200).send({ listed_obj }))
                        .catch(e => res.status(400).send(e))
        }
                    

        for (var i = 0; i < nonItems.length; i++) {
            if (nonItems[i].item === req.query.plItem) {
                NonListedPotLuckItem.deleteOne({ item: req.query.plItem })
                  .then(deleted_response => console.log(deleted_response))
                  .catch(e => res.status(400).send(e));

                return NonListedPotLuckItem.find({ item: req.query.plItem })
                    .then(non_listed_obj => res.status(200).send({ non_listed_obj }))
                    .catch(e => res.status(400).send(e))
            }
        }
    })
})

module.exports = router;