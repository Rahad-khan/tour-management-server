const toursService = require("../Services/tours.services");

exports.getTourSpots = async (req, res, next) => {
    try {
        const result = await toursService.getSpotsService();
        res.status(200).json({
            status: "success",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Something getting wrong",
            error: error.message
        })
    }
};
exports.postTourSpot = async (req, res, next) => {
    try {
        const result = await toursService.postSpotService(req.body);
        res.status(200).json({
            status: "success",
            message: "Spot added successfully",
            data: result
        })
    } catch (error) {
        res.status(406).json({
            status: 'failed',
            message: "Something got error check all properties and try again",
            error: error.message
        })
    }
};
exports.getTourSpotByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await toursService.getSpotByIDService(id);

        res.status(200).json({
            status: "success",
            message: "Spot Found successfully",
            data: result
        })
    } catch (error) {
        res.status(406).json({
            status: 'failed',
            message: "Failed to found the spot",
            error: error.message
        })
    }

};

