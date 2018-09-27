const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = 5000;

app.post('/clients', (req, res) => {
    console.log(req.body)
    res.send(`Client inserted!`)
});

app.listen(port, "localhost", () => console.log(`App is listening on port ${port}...`))