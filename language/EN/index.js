'use strict'
/**
 * English language file
 * Author: - pkumar Soni
 */

//example key and value
//$displayMessage('get_xyz_template_msg', {'name':'rahul','email':'rahul@gamil.com'});
//get_xyz_template_msg: `name {{name}} email {{email}} not found.`,

const exportData = {};

const messages = {
    lang: 'English',
    app_listening: ` App listening at http://{{host}}:{{port}}`,
    db_close: "Database connection was closed.",
    db_many_connections: "Database has too many connections.",
    db_connections_refused: "Database connection was refused.",
    db_connected: "Database connected!",
    page_not_found: `Page {{url}} not found.`,
    wrong: "Something went wrong.",
    api_token: "Get api token.",
    unauthorized: "Unauthorized access.",
    enter_api_token: "Please insert api token.",
    valid_api_token: "Please insert valid api token.",
    enter_api_platform: "Please insert source request platform.",
    valid_api_platform: "Please enter valid source request platform.",
    enter_app_version: "Please insert mobile app version.",
    in_route_get_msg: "in side {{route}} get route",
    in_route_post_msg: "in side {{route}} post route",
    enter_date: "Please insert a date.",
    enter_valid_date: "Please insert a valid date.",
    enter_timezone: "Please select timezone.",
    enter_valid_timezone: "Please select valid timezone.",
    time_slot_not: "Time slot not available.",
    time_slot_avail: "Get available time slot.",
    start_end_time_validation: "Start time should be less than end time",
    expired_date: "expired date not allow.",
    enter_date_time: "Please insert a date time.",
    valid_date_time: "please enter valid date time.",
    enter_time_duration: "Please insert a time duration in minutes.",
    enter_numaric_value: "please enter valid numaric value",
    valid_time_duration: "please enter valid time duration.",
    enter_start_date: "Please insert a start date.",
    enter_valid_start_date: "Please insert a valid start date.",
    enter_end_date: "Please insert a end date.",
    enter_valid_end_date: "Please insert a valid end date.",
};

exportData.getMessage = (key) => {
    return messages[key] || "undefined message.";
}

module.exports = exportData;