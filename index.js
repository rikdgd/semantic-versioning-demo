const express = require('express');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>');
});

app.get('/help', (req, res) => {
    res.send('<h1>Help page</h1>');
});

app.get('/demo', (req, res) => {
    res.send('<h1>Demo page</h1>');
});

app.listen(port, () => {
    console.log(`App started listening on port ${port}`);
});
