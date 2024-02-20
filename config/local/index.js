'use strict';
/**
 * Contains Default configuration setting to use in over all application for local
 * 
 */

const config = {
    site_config: {
        app_name: 'Booking system',
        base_url: 'http://localhost/',
        host: '0.0.0.0',
        port: '4200',
        env: 'production', // [local,production] default is production
        site_url: 'http://xyz.com/',
        isHttps: false
    },
    appLanguage: {
        name: 'EN'
    },
    config_mysql1: {
        connectionLimit: 5,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'booking_system',
        multipleStatements: true
    }
}

module.exports = config;