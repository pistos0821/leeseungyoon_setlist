const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let performances = [];

app.get('/performances', (req, res) => {
    res.json(performances);
});

app.post('/performances', (req, res) => {
    performances = req.body;
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
