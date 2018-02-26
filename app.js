const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res, next ) => {
    res.sendFile(__dirname + '/index.html');
});

app.use('*', (req, res) => {
    res.status(404).send('This page does not exist.')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Running on ' + PORT);
});


