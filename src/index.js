const moment = require('moment');
const date = '2018-11-23';

if (moment(date).isValid()) {
    console.log(moment(date).fromNow());
    console.log(moment(date).add(10, 'years').format('YYYY-MM-DD'));
}