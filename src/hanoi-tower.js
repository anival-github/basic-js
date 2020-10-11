const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let transfersNeeded = (2 ** disksNumber) - 1;
  let timeNeeded = transfersNeeded / turnsSpeed;
  let timeNeededFloor = Math.floor(timeNeeded * 3600);
  let result = {
    turns: transfersNeeded,
    seconds: timeNeededFloor,
  };
  return result;
};