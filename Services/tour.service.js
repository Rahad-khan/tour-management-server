const Spots = require("../Models/venue.model")

exports.getTrendingServices = async () => {
    const topThreeSpot = await Spots.find({}).sort({ view: -1 }).limit(3);
    return topThreeSpot;
};
exports.getCheapestServices = async () => {
    const topCheapestTours = await Spots.find({}).sort({ price: 1 }).limit(3);
    return topCheapestTours;
};

exports.updateSpotServices = async (id, body) => {
    const updatedSpot = await Spots.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true });
    return updatedSpot;
}