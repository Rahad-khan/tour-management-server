const express = require('express');
const tourController = require('../../Controller/tours.controller');

const router = express.Router();

router.route('/')
    .get(tourController.getTourSpots)
    .post(tourController.postTourSpot)

router.route('/:id')
    .get(tourController.getTourSpotByID)

module.exports = router;