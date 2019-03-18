const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const foods = require('./routes/foods');
const list = require('./routes/list');
const user = require('./routes/user');

const app = express();
const port = process.env.PORT || 5000;

require('./config/passport')(passport);
app.use(passport.initialize());

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json(), cors());
app.use('/api/foods', foods);
app.use('/api/plList', list);
app.use('/api/user', user);

app.listen(port, () => console.log(`Running on port ${port}`))