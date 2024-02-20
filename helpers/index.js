'use strict';
const _ = require('lodash');
const CONSTANT = require('../config/constant');
const moment = require('moment-timezone');
const { getTimeSlots } = require('../modules/events/services')
const exportData = {};

exportData.getFreeSlots = async (inputData) => {
    try {
        let bookingDateTimeStamp = moment(inputData.date, "DD-MM-YYYY").unix();
        let existingSlots = await getTimeSlots({ bookingDate: bookingDateTimeStamp });

        let startTime = moment((inputData.date + " " + CONSTANT.START_HOURS), "DD-MM-YYYY hh:mm A");
        let endTime = moment((inputData.date + " " + CONSTANT.END_HOURS), "DD-MM-YYYY hh:mm A");
        let timeSlots = {};
        if (endTime.isBefore(startTime)) {
            return timeSlots;
        }
        while (startTime <= endTime) {
            if (!_.includes(_.map(existingSlots, 'abm_booking_time'), moment(startTime).unix()))
                timeSlots[moment(startTime).unix()] = moment(startTime).tz(inputData.timezone).format("hh:mm A");
            startTime.add(CONSTANT.DURATION, CONSTANT.DURATION_IN);
        }
        return timeSlots;
    } catch (error) {
        $applicationLogger.error($errorLogDetails(), { status: false, code: CONSTANT.RESPONSE_SERVER_ERR, msg: error.message });
        return false;
    }
    return false;
}

module.exports = exportData;