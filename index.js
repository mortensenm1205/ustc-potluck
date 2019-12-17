const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoose } = require('./config/db');

const foods = require('./routes/foods');
const list = require('./routes/list');

const app = express();
const port = process.env.PORT || 5000;

// This middleware is helping connect CRA to our backend
app.use(express.static(path.join(__dirname, 'client/build')));
// Commone middleware utils for JSON and CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json(), cors());
// Our routes. Objects are part of the Express.router
app.use('/api/foods', foods);
app.use('/api/plList', list);
// Standard listening function
app.listen(port, () => console.log(`Running on port ${port}`))