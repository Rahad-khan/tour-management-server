const express = require('express');
const cors = require('cors');
const toursRoute = require('./Routes/v1/tours.route');
const tourRoute = require('./Routes/v1/tour.route');
require("dotenv").config();
const app = express();

// middleweares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.use('/api/v1/tours', toursRoute);
app.use('/api/v1/tour', tourRoute)

app.get('*', (req, res) => {
    res.status(400).send("Roots not found")
});

module.exports = app;
