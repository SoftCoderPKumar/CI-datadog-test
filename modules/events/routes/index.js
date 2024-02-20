'use strict';
const express = require('express');
const router = express.Router();
const { isEncodedInput, userValidationChecking } = require('../../../config/api_validation');
const bookingController = require('../controllers');
const bookingHelper = require('../helpers');


router.get('/', async function (req, res, next) {
    $jsonResponse(res, $displayMessage('in_route_get_msg', { route: 'events' }));
});
router.post('/', function (req, res, next) {
    $jsonResponse(res, $displayMessage('in_route_post_msg', { route: 'events' }));
});

router.get('/free-slots', isEncodedInput, bookingHelper.freeSlotsValidation, userValidationChecking, bookingController.freeSlotsGet);
router.post('/create-event', isEncodedInput, bookingHelper.createEventValidation, userValidationChecking, bookingController.createEventPost);

router.get('/get-events', isEncodedInput, bookingHelper.getEventsValidation, userValidationChecking, bookingController.getEventsGet);

module.exports = router;