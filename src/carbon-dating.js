const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false
  }
  if (arguments.length === 0) {
    return false
  }
  if (typeof +sampleActivity !== "number") {
    return false
  }
  if (+sampleActivity > 0 && +sampleActivity <= 15) {
      let k = 0.693 / HALF_LIFE_PERIOD
      return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k)
  } else {
      return false
  }
};



// Параметр функции `sampleActivity` имеет тип `string`.
// Рассчитаный возраст образца должен иметь тип `number`.
// Возраст должен быть **целочисленным**. Возраст должен **округлен вверх**
// (при получении целого числа). В случае неправильного **типа** входного параметра или
// **несоответствующем** значении активности, или отсутствии аргумента функция должна вернуть `false`.

