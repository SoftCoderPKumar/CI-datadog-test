'use strict';
/**
 * Contains Default configuration setting to use in over all application for local
 * 
 */

const config = {
    site_config: {
        app_name: 'Booking system',
        base_url: 'https://dr-appointment-booking.herokuapp.com/',
        host: '0.0.0.0',
        port: process.env.PORT || 4200,
        env: 'production', // [local,production] default is production
        site_url: 'https://dr-appointment-booking.herokuapp.com/',
        isHttps: false
    },
    appLanguage: {
        name: 'EN'
    },
    config_mysql1: {
        connectionLimit: 5,
        host: 'sql12.freemysqlhosting.net',
        user: 'sql12395402',
        password: 'UrNCXZ63pH',
        database: 'sql12395402',
        multipleStatements: true
    }
}

module.exports = config;