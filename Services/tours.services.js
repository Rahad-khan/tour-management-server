const Spots = require("../Models/venue.model")

exports.getSpotsService = async (query) => {
    const spots = await Spots.find({})
        .select(query.fields)
        .sort(query.sort)
        .skip(query.skip)
        .limit(query.limit);
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