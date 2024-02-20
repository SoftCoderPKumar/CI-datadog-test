'use strict';
const CONSTANT = require('../../../config/constant');
const bookingModel = require('../models');

const exportData = {};

exportData.freeSlotsGet = async (req, res, next) => {
    let response = {
        status: false,
        msg: $displayMessage("wrong"),
        res: null
    }
    try {
        let inputData = req.query;
        response = await bookingModel.getFreeSlots(inputData);
    } catch (error) {
        $applicationLogger.error($errorLogDetails(), { status: false, code: CONSTANT.RESPONSE_SERVER_ERR, msg: error.message });
    }
    $jsonResponse(res, response);
}
exportData.createEventPost = async (req, res, next) => {
    let response = {
        status: false,
        msg: $displayMessage("wrong"),
        res: null
    }
    try {
        let postData = req.body;
        response = await bookingModel.createEvent(postData);
    } catch (error) {
        $applicationLogger.error($errorLogDetails(), { status: false, code: CONSTANT.RESPONSE_SERVER_ERR, msg: error.message });
    }
    $jsonResponse(res, response);
}

exportData.getEventsGet = async (req, res, next) => {
    let response = {
        status: false,
        msg: $displayMessage("wrong"),
        res: null
    }
    try {
        let inputData = req.query;
        response = await bookingModel.getEvents(inputData);
    } catch (error) {
        $applicationLogger.error($errorLogDetails(), { status: false, code: CONSTANT.RESPONSE_SERVER_ERR, msg: error.message });
    }
    $jsonResponse(res, response);
}


module.exports = exportData;