const Spots = require("../Models/venue.model")

exports.getSpotsService = async () => {
    const spots = await Spots.find({});
    return spots;
};
exports.postSpotService = async (data) => {
    const addSpot = await Spots.create(data);
    return addSpot;
};
exports.getSpotByIDService = async (id) => {
    const spot = await Spots.findById(id).exec();
    spot.view = ++spot.view;
    await spot.save();
    return spot;
};