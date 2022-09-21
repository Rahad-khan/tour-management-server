const { Schema, model } = require('mongoose');


const tourSchema = new Schema({
    name: {
        type: String,
        unique: [true, "Name should be unique"],
        minLength: [3, "Name is too short"],
        maxLength: [100, "Name is too high"],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "price can't be negative"],
    },
    view: {
        type: Number,
        required: [true, "View count is required"],
        min: [0, "View can't be negative"]
    }
}, {
    timestamps: true
});


const Spots = model('Spots', tourSchema);

module.exports = Spots;

