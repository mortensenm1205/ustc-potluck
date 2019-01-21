const express = require('express');

const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => res.send(`Running on port ${port}`));

app.listen(port, () => console.log(`Running on port ${port}`))