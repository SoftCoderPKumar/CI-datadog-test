'use strict';
const _ = require('lodash');
const CONSTANT = require('../config/constant');
const exportData = {};

exportData.apiRequestLog = async (requestData) => {

    let body = JSON.stringify(requestData.body);
    let header = JSON.stringify(requestData.headers);
    let query = JSON.stringify(requestData.query);
    let reqUrl = requestData.originalUrl || '';
    let platform = requestData.headers.platform || '';
    let version = requestData.headers.version || '';
    let userAgent = requestData.headers['user-agent'] || '';
    let ipAddress = requestData.connection.remoteAddress || '';
    let creationDate = _.round(_.now() / 1000);
    try {
        let sql = 'CALL API_REQUEST_LOG_IP(?,?,?,?,?,?,?,?,?)';
        let inputarr = [platform, version, reqUrl, header, body, query, ipAddress, userAgent, creationDate];
        let resDb = await db1.query(sql, inputarr);
        let retAr = $convertProcedureData(resDb, true);
        let ret = retAr[0] || false;
        return ret;
    } catch (error) {
        $applicationLogger.error($errorLogDetails(), { status: false, code: CONSTANT.RESPONSE_SERVER_ERR, msg: error.message });
        return false;
    }
    return false;
}

module.exports = exportData;