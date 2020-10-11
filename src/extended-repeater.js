const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let trueSeparator = (options.separator === undefined) ? '+' : options.separator;
  let trueRepeatTimes = (options.repeatTimes === undefined) ? 1 : options.repeatTimes;
  let trueAddition =  (options.addition === undefined) ? '' : String(options.addition);
  let trueAdditionSeparator = (options.additionSeparator === undefined) ?  '|' : options.additionSeparator;
  let trueAdditionRepeatTimes = (options.additionRepeatTimes === undefined) ?  1 : options.additionRepeatTimes;

  let additionPlusSeparator = (trueAddition + trueAdditionSeparator).repeat(trueAdditionRepeatTimes).slice(0, -trueAdditionSeparator.length);
  let fullStr = String(str) + additionPlusSeparator + trueSeparator;
  let fullStrRepeated = fullStr.repeat(trueRepeatTimes).slice(0, -trueSeparator.length);
  return fullStrRepeated;
};


// str // `string` to repeat. Вставить проверку на СТРИНГ. Если не стринг - КОНВЕРТИРОВАТЬ в стринг
//  options.repeatTimes // how much str to repeat; целое число. если нету = 0
//  options.separator // separator betwee str. СТРИНГ
//         options.separator.length // количество символов в строке - сепараторе - str.length
//         str.slice(beginSlice[, endSlice]) // обрезать конец строки
//  options.addition //   additional `string` to be added to each `str`. Вставить проверку на СТРИНГ. Если не стринг - КОНВЕРТИРОВАТЬ в стринг
//  options.additionRepeatTimes //   how many tines `addition` to repeat; целое число. если нету = 0
//  options.additionSeparator // separator between `additions`. СТРИНГ

// 1) сделать разделители  НЕ ПРАВИЛЬНО ТУТ - НУЖНО ПРИБАВИТЬ РАЗДЕЛИТЕЛЬ МЕЖДУ ДОПОЛНЕНИЯМИ

// options.addition.repeat(options.additionRepeatTimes).slice(0, -options.addition.length)

// 2) сделать строку с допами и разделителем

// str + options.addition.repeat(options.additionRepeatTimes).slice(0, -options.addition.length) + options.separator

// 3) сделать резалт

// (str + options.addition.repeat(options.additionRepeatTimes).slice(0, -options.addition.length) + options.separator).repeat(options.repeatTimes).slice(0, -options.separator.length)


// 4) сборка
// let additionsRepeated = options.addition.repeat(options.additionRepeatTimes).slice(0, -options.addition.length);
// let strAdded = str + additionsRepeated + options.separator;
// let result = strAdded.repeat(options.repeatTimes).slice(0, -options.separator.length);
// return result;



// The only indispensable parameter is `str`, any others may be not defined. `separator` default value is `'+'`. `additionSeparator` default value is `'|'`.

// For example: `repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })` => `'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'`

// Write your code in `src/extended-repeater.js`.
// This function returns a repeating `string` based on the given parameters:
