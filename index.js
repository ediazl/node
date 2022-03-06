
const http = require('http')
const url = require('url')
const A = require('./modules/a.js')
const B = require('./modules/b.js')



A.hola()
B.hola()

http.createServer(function (req, res) {
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end();
        console.log('favicon requested');
        return;
      }

    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(req.url);
    var q = url.parse(req.url, true).query;
    if(!q.year || !q.month) console.log("error")
    console.log('despuess');
    var txt = q.year + " " + q.month;
    res.end();
  }).listen(8080);