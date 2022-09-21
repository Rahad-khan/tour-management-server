const app = require("./app");
const colors = require('colors');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URL, () => {
    console.log("Database connected successfully".red.bold)
})

app.listen(port, () => {
    console.log(`Port is running at, ${port}`.brightYellow.bold);
})