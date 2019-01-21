const express = require('express');
const { connect } = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();

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