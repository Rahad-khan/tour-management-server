const express = require('express');
const tourController = require('../Controller/tour.controller');

const router = express.Router();

router.route('/trending')
    .get(tourController.trendingSpots);

router.route('/cheapest')
    .get(tourController.cheapestSpot);

router.route('/:id')
    .patch(tourController.updateSpotById);

module.exports = router;