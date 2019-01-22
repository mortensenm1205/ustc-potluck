const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const foods = require('./routes/foods');
const list = require('./routes/list');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')))
app.use(bodyParser.json(), cors());
app.use('/api/foods', foods);
app.use('/api/plList', list);

app.listen(port, () => console.log(`Running on port ${port}`))