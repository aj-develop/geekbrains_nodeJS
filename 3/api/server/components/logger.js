const moment = require('moment');
const writer = require('../utils/writer');
const path = require("path");
const urlLog = path.resolve('./logs/log.txt');

module.exports = async (message) => {

    const log = `${moment().format('LLL')} === ${message}`;

    try {
        await writer(urlLog, log);
        return true;
    } catch {
        return false;
    }
};
