const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (Array.isArray(arr) !== true) { // 1) делаем проверку arr массив ли
    throw "Error"
  }
  let arrTranformed = arr.slice()  // 2) создаем новый массив, такой же как arr
  for(i = 0; i <= arrTranformed.length - 1; i += 1) {   // 3) перебираем массив
      if (arrTranformed[i] === '--discard-next') {
          arrTranformed.fill('to be deleted', i, i + 2)
       }
      if (arrTranformed[i] === '--discard-prev') {
          arrTranformed.fill('to be deleted', i - 1, i + 1)
      }
      if (arrTranformed[i] === '--double-next' && arrTranformed[i+1] !== undefined) {
          arrTranformed.fill(arrTranformed[i+1], i, i + 1)
      }
      if (arrTranformed[i] === '--double-prev' && arrTranformed[i-1] !== undefined) {
          arrTranformed.fill(arrTranformed[i-1], i, i + 1)
      }
  }
  function toBeDeleted(value) {
      return value !== 'to be deleted' && value !== '--discard-next' && value !== '--discard-prev' && value !== '--double-next' && value !== '--double-prev'
  }

  let arrTranformedFiltered = arrTranformed.filter(toBeDeleted)
  return arrTranformedFiltered

};

