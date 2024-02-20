'use strict';
const _ = require('lodash');
const CONSTANT = require('../../../config/constant');
const moment = require('moment-timezone');
const exportData = {};

exportData.createEvent = async(postData) => {
    try {
        let bookingDateTime = moment.unix(postData.datetime).format("DD-MM-YYYY hh:mm A");
        let bookingDate = moment.unix(postData.datetime).format("DD-MM-YYYY");
        let bookingDateTimeStamp = moment(bookingDateTime, "DD-MM-YYYY").unix();
        let StanderTimeformate = moment(bookingDateTime, "DD-MM-YYYY hh:mm A");
        let bookingTime = "";
        let endTime = moment((bookingDate + " " + CONSTANT.END_HOURS), "DD-MM-YYYY hh:mm A");
        let endTimeStamp = moment(endTime).unix();
        let ret = false;
        for (let i = 1; i <= postData.duration / CONSTANT.DURATION; i++) {
            bookingTime = moment(StanderTimeformate).unix();
            if (bookingTime > endTimeStamp)
                break;
            if (bookingTime) {
                let sql = 'CALL API_CREATE_EVENT_IP(?,?)';
                let inputarr = [bookingDateTimeStamp, bookingTime];
                let resDb = await db1.query(sql, inputarr);
                let retAr = $convertProcedureData(resDb, true);
                ret = retAr[0] || false;
            }
            StanderTimeformate.add(CONSTANT.DURATION, CONSTANT.DURATION_IN);
        }
        return ret;
    } catch (error) {
        $applicationLogger.error($errorLogDetails(), { status: false, code: CONSTANT.RESPONSE_SERVER_ERR, msg: error.message });
        return false;
    }
    return false;
}

exportData.getTimeSlots = async(postData) => {
    try {
        let bookingDate = postData.bookingDate || '';
        let orderBy = postData.orderBy || '';
        let orderAct = postData.orderAct || '';
        let sql = 'CALL API_GET_TIME_SLOTS_SP(?,?,?)';
        let inputarr = [bookingDate, orderBy, orderAct];
        let resDb = await db1.query(sql, inputarr);
        let retAr = $convertProcedureData(resDb, false);
        let ret = retAr[0] || false;
        return ret;
    } catch (error) {
        $applicationLogger.error($errorLogDetails(), { status: false, code: CONSTANT.RESPONSE_SERVER_ERR, msg: error.message });
        return false;
    }
    return false;
}

exportData.getEvents = async(postData) => {
    try {
        let startBookingDate = moment(postData.startDate, "DD-MM-YYYY").unix() || 0;
        let endBookingDate = moment(postData.endDate, "DD-MM-YYYY").unix() || 0;
        let orderBy = postData.orderBy || 'abm_booking_time';
        let orderAct = postData.orderAct || 'asc';
        let sql = 'CALL API_GET_EVENTS_SP(?,?,?,?)';
        let inputarr = [startBookingDate, endBookingDate, orderBy, orderAct];
        let resDb = await db1.query(sql, inputarr);
        let retAr = $convertProcedureData(resDb, false);
        let ret = retAr[0] || false;
        return ret;
    } catch (error) {
        $applicationLogger.error($errorLogDetails(), { status: false, code: CONSTANT.RESPONSE_SERVER_ERR, msg: error.message });
        return false;
    }
    return false;
}

module.exports = exportData;