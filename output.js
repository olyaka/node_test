exports.APIrequest = function (req, res) {
    var request = require('request');
    var result;
    
    var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=' + req.body.ticker + '&apikey=' + req.body.APIkey;
    request(url, function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); 
    
    result = body;
    console.log('body:', body);
    debugger;
    

    res.end();
    });

    return result;
}