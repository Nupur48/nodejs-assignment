var http = require('http');

http.createServer(function (req, res) {
    res.write('Server created');
    res.end();
}).listen(8080);