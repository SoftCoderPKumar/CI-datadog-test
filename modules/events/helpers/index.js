'use strict'
const _ = require('lodash');
const { body, query } = require('express-validator');
const { timezone } = require("../constents/timezone");
const CONSTANT = require('../../../config/constant');
const moment = require("moment-timezone");
const exportData = {};


let checkPassingDate = (value, { req, location, path }) => {

    if (value) {
        if (moment(value, "DD-MM-YYYY").unix() >= moment(currentData(), "DD-MM-YYYY").unix()) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

let currentData = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    return currentDate;
}
exportData.freeSlotsValidation = [
    query('date', $displayMessage("enter_date")).trim().not().isEmpty().isDate('dd-mm-yyyy').withMessage($displayMessage("enter_valid_date")).custom(checkPassingDate).withMessage($displayMessage("expired_date")),
    query('timezone', $displayMessage("enter_timezone")).trim().not().isEmpty().custom((value, { req }) => _.includes(timezone, value)).withMessage($displayMessage('enter_valid_timezone')),
];
exportData.createEventValidation = [
    body('datetime', $displayMessage('enter_date_time')).trim().not().isEmpty().isInt().withMessage($displayMessage('valid_date_time')),
    body('duration', $displayMessage("enter_time_duration")).trim().not().isEmpty().isInt().withMessage($displayMessage('enter_numaric_value')).custom((value, { req }) => (value % CONSTANT.DURATION) == 0).withMessage($displayMessage("valid_time_duration")),
];

exportData.getEventsValidation = [
    query('startDate', $displayMessage("enter_start_date")).trim().not().isEmpty().isDate('dd-mm-yyyy').withMessage($displayMessage("enter_valid_start_date")),
    query('endDate', $displayMessage("enter_end_date")).trim().not().isEmpty().isDate('dd-mm-yyyy').withMessage($displayMessage("enter_valid_end_date")),
];
module.exports = exportData;