const tourServices = require("../Services/tour.service");

exports.updateSpotById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await tourServices.updateSpotServices(id, req.body);
        res.status(200).json({
            status: "success",
            message: "updated data successfully",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Failed to update",
            error: error.message
        })
    }
};
exports.trendingSpots = async (req, res, next) => {
    try {
        const result = await tourServices.getTrendingServices();
        res.status(200).json({
            status: "success",
            message: "Top three highlighted spot get successfully",
            data: result
        })
    } catch (error) {
        res.status(406).json({
            status: 'failed',
            message: "Something wrong try again later",
            error: error.message
        })
    }
};
exports.cheapestSpot = async (req, res, next) => {
    try {
        const result = await tourServices.getCheapestServices();
        res.status(200).json({
            status: "success",
            message: "Top three cheapest price spot get successfully",
            data: result
        })
    } catch (error) {
        res.status(406).json({
            status: 'failed',
            message: "Something wrong try again later",
            error: error.message
        })
    }
};