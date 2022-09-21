const express = require('express');
const cors = require('cors');
const toursRoute = require('./Routes/tours.route');
const tourRoute = require('./Routes/tour.route');
require("dotenv").config();
const app = express();

// middleweares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.use('/tours', toursRoute);
app.use('/tour', tourRoute)

app.get('*', (req, res) => {
    res.status(400).send("Roots not fount")
});

module.exports = app;
