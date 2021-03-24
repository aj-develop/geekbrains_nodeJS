const express = require('express');
const unirest = require('unirest');

const api = express();
api.use(express.json());

api.get('/api?', (req, res) => {
    // res.json(req.query);
    const request = unirest(
        "POST",
        "https://google-translate1.p.rapidapi.com/language/translate/v2"
    );

    request.headers({
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-key": "74ec3ceab8msh1d1c81794c6b082p1b2d36jsne6f9e3dc506f",
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
    });

});

api.listen(3000);