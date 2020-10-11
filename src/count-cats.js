const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let catsAmount = 0;
  for (let index1 = 0; index1 < backyard.length; index1 += 1) {
    let backyardLine = backyard[index1];
    for (let index2 = 0; index2 < backyardLine.length; index2 += 1) {
      if (backyardLine[index2] === '^^') catsAmount += 1;
    };
  };
  return catsAmount;
};
