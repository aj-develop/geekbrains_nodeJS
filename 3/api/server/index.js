const express = require('express');
const unirest = require('unirest');
const logger = require('./components/logger');

const api = express();
api.use(express.json());

api.get('/api?', (req, res) => {


    const request = unirest(
        "POST",
        "https://google-translate1.p.rapidapi.com/language/translate/v2"
    );
    request.headers({
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-key": "e4db6fe5f7msh32b4c2aec4e8e1ap1af503jsn2576fbae8ee0",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "useQueryString": true
    });

    request.form({
        "q": req.query.q,
        "source": req.query.lang1,
        "target": req.query.lang2
    });


    request.end(function (response) {
        if (res.error) throw new Error(res.error);
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });

        res.send(response.body.data.translations);
        let logMessage = req.query.lang1 + ' : ' + req.query.q + ' <> ' +
            req.query.lang2 + ' : ' + response.body.data.translations[0].translatedText;
        logger(logMessage);
    });

});

api.listen(3000);
