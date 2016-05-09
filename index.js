var http = require('http');
var randomNum = require('./modules/moduleone.js');
var convertUSD = require('./modules/moduletwo.js');
var accountDisplay = require('./modules/modulethree.js');
http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(accountDisplay.accountBal());
  res.write(accountDisplay.randomUSD());
  res.end();
}).listen(3000);

console.log("listening on port 3000");
