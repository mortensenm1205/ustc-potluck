const express = require('express');

const { mongoose } = require('../config/db');
const { List } = require('../models/list');

const router = express.Router();

router.get('/getList', (req, res) => {
    List.find()
        .then(item => res.status(200).send({ item }))
        .catch(e => res.status(400).send(e))
});

module.exports = router;