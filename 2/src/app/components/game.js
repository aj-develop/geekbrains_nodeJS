const selector = require('../../utils/radio');
const logger = require('./logger');

function randomize() {
    return Math.floor(Math.random() * 2 + 1);
}

function translate(value) {
    const variants = ['heads', 'tails'];

    return variants.indexOf(value) + 1;
}

module.exports = async () => {
    let user, ai;
    try {
        ai = randomize();
        user = await selector({
            name: 'Орел или решка',
            message: 'Select Unit',
            choices: [
                'heads',
                'tails',
            ]
        });

    } catch (err) {
        console.log('Crush ', err);
    } finally {
        if (user === undefined) {
            console.log("Неверный ввод");
            await logger('ERROR');
        } else {
            if (translate(user) === ai) {
                console.log("Угадали");
                await logger('WIN');
            } else {
                console.log("Неверно. Попробуйте снова");
                await logger('LOSE');
            }
        }
    }
}