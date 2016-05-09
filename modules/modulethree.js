var randomNum = require('./moduleone.js');
var convertUSD = require('./moduletwo.js');

var  randomUSD = function(){
  return convertUSD(randomNum(100, 1000000)).toString();
};

var accountBal = function(){
    var accBalString = ("Account Balance:\n");
    return accBalString;
  };

var myFunctions = {randomUSD: randomUSD, accountBal:accountBal};
module.exports = accountBal;
module.exports = randomUSD;
