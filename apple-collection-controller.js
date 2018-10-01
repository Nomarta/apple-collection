const express = require('express');
const bodyParser = require('body-parser');
const repository = require('./apple-collection-repository');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = 80;

app.post('/clients', (req, res) => {
    repository.insertClient(req.body)
    res.send('Client inserted')
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
});

app.get('/nowygosc', (req, res) => {
    res.sendFile('nowygosc.html', { root: __dirname })
});

app.get('/zamowienie', (req, res) => {
    res.sendFile('zamowienie.html', { root: __dirname })
});

app.listen(port, "localhost", () => console.log(`App is listening on port ${port}...`))