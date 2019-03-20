const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const { mongoose } = require('./config/db');
const { User } = require('./models/user');

const foods = require('./routes/foods');
const list = require('./routes/list');
const user = require('./routes/user');

const app = express();
const port = process.env.PORT || 5000;

require('./config/passport')(passport);

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    User.findById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

app.use(session({
    secret: 'ustcPotluck!', 
    resave: false, 
    saveUninitialized: true, 
    cookie: { maxAge: null } 
})); //session secret
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json(), cors());
app.use('/api/foods', foods);
app.use('/api/plList', list);
app.use('/api/user', user);

app.listen(port, () => console.log(`Running on port ${port}`))