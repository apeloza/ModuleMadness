var randomNum = require('./moduleone.js');
var convertUSD = require('./moduletwo.js');

var  randomUSD = function(){
  return convertUSD(randomNum(100, 1000000)).toString();
};

var accountBal = function(){
    var accBalString = ("Account Balance:\n");
    return accBalString;
  };

module.exports.randomUSD = randomUSD;
module.exports.accountBal = accountBal;
