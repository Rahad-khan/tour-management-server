exports.updateSpotById = (req, res, next) => {
    res.send(req.params.id)
};
exports.trendingSpots = (req, res, next) => {
    res.send("From trendingSpots")
};
exports.cheapestSpot = (req, res, next) => {
    res.send("From cheapestSpot")
};