'use strict';
const _ = require("lodash");
const CONSTANT = require('../../../config/constant');
const { getFreeSlots } = require('../../../helpers/');
const eventService = require("../services")
const moment = require("moment-timezone");

const exportData = {};

exportData.getFreeSlots = async (inputData) => {
    let response = {
        status: false,
        msg: $displayMessage("wrong"),
        res: null
    }
    try {
        let result = await getFreeSlots(inputData);
        if (result && Object.keys(result).length) {
            response = {
                status: true,
                msg: $displayMessage("time_slot_avail"),
                res: result
            }
        } else {
            response = {
                status: false,
                msg: $displayMessage("time_slot_not"),
                res: null
            }
        }
    } catch (error) {
        $applicationLogger.error($errorLogDetails(), { status: false, code: CONSTANT.RESPONSE_SERVER_ERR, msg: error.message });
    }
    return response;
}
exportData.getEvents = async (inputData) => {
    let response = {
        status: false,
        msg: $displayMessage("wrong"),
        res: null
    }
    try {
        let resultdata = await eventService.getEvents(inputData);
        let res = [];
        _.forEach(resultdata, function (item) {
            res.push({
                bookingDate: moment.unix(item.abm_booking_time).format("DD-MM-YYYY hh:mm A")
            })
        })
        if (res && Object.keys(res).length) {
            response = {
                status: true,
                msg: "get event list",
                res: res
            }
        } else {
            response = {
                status: false,
                msg: "Event not available.",
                res: null
            }
        }
    } catch (error) {
        $applicationLogger.error($errorLogDetails(), { status: false, code: CONSTANT.RESPONSE_SERVER_ERR, msg: error.message });
    }
    return response;
}

exportData.createEvent = async (postData) => {
    let response = {
        status: false,
        msg: $displayMessage("wrong"),
        res: null
    }
    try {
        let result = await eventService.createEvent(postData);
        if (result && result.affected_rows) {
            response = {
                status: true,
                msg: "Event created successfuly.",
                res: null
            }
        } else {
            response = {
                status: false,
                msg: "Something happend wrong! try again.",
                res: null
            }
        }
    } catch (error) {
        $applicationLogger.error($errorLogDetails(), { status: false, code: CONSTANT.RESPONSE_SERVER_ERR, msg: error.message });
    }
    return response;
}


module.exports = exportData;