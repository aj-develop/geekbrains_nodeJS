const fsPromises = require('fs').promises;
const urlLog = './logs/log.txt';

fsPromises.readFile(urlLog)
    .then(function (data) {
        data = data.toString().split("\n");
        let win = 0, lose = 0,
            prevStep = '',
            accumWin = [], accumLose = [],
            winSeries = 0, loseSeries = 0,
            winLine = 0, loseLine = 0;
        data.forEach(line => {
            if (!line.includes('ERROR')) {
                
                if (line.includes('WIN')) {
                    win++;
                    if (prevStep === 'WIN') {
                        accumWin[winSeries] = ++winLine;
                    }
                    if (prevStep === 'LOSE') {
                        winSeries++;
                        winLine = 0;
                    }
                }

                if (line.includes('LOSE')) {
                    lose++;
                    if (prevStep === 'LOSE') {
                        accumLose[loseSeries] = ++loseLine;
                    }
                    if (prevStep === 'WIN') {
                        loseSeries++;
                        loseLine = 0;
                    }
                }

                if (line.includes('WIN')) prevStep = 'WIN';
                if (line.includes('LOSE')) prevStep = 'LOSE';
            }
        });

        let maxWin = accumWin.sort((a, b) => b - a)[0] + 1;
        let maxLose = accumLose.sort((a, b) => b - a)[0] + 1;

        console.log(`
            Общее количество партий: ${win + lose}\n
            Выиграно: ${win} (${(win / (win + lose) * 100).toFixed(2)}%)\n
            Проиграно: ${lose} (${(lose / (win + lose) * 100).toFixed(2)}%)\n
            Максимальная выигрышная серия: ${maxWin}\n
            Максимальная проигрышная серия: ${maxLose}
        `);

    })
    .catch(function (error) {
        console.log(error);
    })