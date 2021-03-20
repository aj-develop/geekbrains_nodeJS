const moment = require('moment');
const beep = require("beepbeep");
const colors = require('colors');

const date = '2018-11-23';

if (moment(date).isValid()) {
    beep(2, 1000);
    dateFromNow = moment(date).fromNow();
    console.log(dateFromNow.green);
    dateAdd10Years = moment(date).add(10, 'years').format('DD.MM.YYYY');
    console.log(dateAdd10Years.rainbow);
}