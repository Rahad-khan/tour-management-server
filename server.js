const app = require("./app");
const colors = require('colors');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URL, () => {
    console.log("Database connected successfully".red.bold)
})

app.get('/', (req, res) => {
    res.send('Welcome to Tour Management System')
});

app.get('*', (req, res) => {
    res.status(400).send("Roots not fount")
});

app.listen(port, () => {
    console.log(`Port is running at, ${port}`.brightYellow.bold);
})