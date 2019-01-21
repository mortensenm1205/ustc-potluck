const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();

/*
    This helps us handle CORS related issues we might face 
    if we try to access our api from a different domain.
*/
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

// Simple DB entry.
app.get('/', (req, res) => {
    connect()
        .then(db => {
            db.collection('ustc-potluck').insertOne({
                name: "Matt Mortensen",
                item: "Sodas"
            }).then(result => res.send(result))
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
});

app.listen(port, () => console.log(`Running on port ${port}`))