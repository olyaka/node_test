var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var APIrequest = require('./output');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', './views');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/main', function (req, res) {
    res.render('index', {title: 'Test', message: 'Input data'});
})

app.post('/main', urlencodedParser, function (req, res) {
    var body = APIrequest.APIrequest(req, res);

    res.render('output', {title: 'Test', message: 'Output data', result: 'body'});
});

app.listen(port, function () {
    console.log('started');
})