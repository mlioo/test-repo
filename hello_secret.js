const express = require('express')
const app = express()

var SECRET_KEY = "ashdjfhakjs";
var KEY = "ajskdjfklasdf";
var AWS_SECRET_KEY = "afhsjdhfjk";

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
