const Radio = require('prompt-radio');

module.exports = async options => {
    try {
        const radio = new Radio(options);
        
        return await radio.run();
    } catch (err) {
        return err;
    }
};