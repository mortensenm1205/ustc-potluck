const express = require('express');
const bodyParser = require('body-parser');

const foods = require('./routes/foods');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/foods', foods);

app.listen(port, () => console.log(`Running on port ${port}`))