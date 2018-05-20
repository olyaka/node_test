exports.APIrequest = function (req, res) {
    var request = require('request');
    var express = require('express');
    var bodyParser = require('body-parser');
    var path = require('path');
    var app = express();
    app.use(bodyParser.json());

    app.set('view engine', 'pug');
    app.set('views', './views');
    
    
    var url = 'https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=' + req.body.ticker + '&apikey=' + req.body.APIkey;
    request(url, function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); 
    
    console.log('body:', body);

    res.render('output', {title: 'Test', message: 'Output data', result: body});
    
    res.end();
    });

}