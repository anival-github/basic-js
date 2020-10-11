const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {


  constructor(modification){
    if (modification === false) {
      this.name = "reverse";
    }
    if ((modification === true) || (modification === undefined)) {
      this.name = "direct";
    }
  }

  encrypt(message, key) {
    if (message === undefined) throw 'Error';
    if (key === undefined) throw 'Error';

      // Преобразуем message для работы
      let messageUpperCase = message.toUpperCase();
      let messageArray = messageUpperCase.split('');

      for (let i = 0; i <= messageArray.length - 1; i += 1) {
          if ((messageArray[i].charCodeAt(0) >= 65) && (messageArray[i].charCodeAt(0) <= 90)) {
              messageArray[i] = messageArray[i].charCodeAt(0);
          }
      };

      // Преобразуем key для работы
      let keyUpperCase = key.toUpperCase();
      let keyArray = keyUpperCase.split('');

      for (let i = 0;  keyArray.length < messageArray.length; i += 1) {
          keyArray.push(`${keyArray[i]}`);
          if (i ===  keyArray.length - 1) i = -1;
      }

      while (keyArray.length > messageArray.length) {
          keyArray.pop();
      }

      for (let i = 0; i <= keyArray.length - 1; i += 1) {
          if ((keyArray[i].charCodeAt(0) >= 65) && (keyArray[i].charCodeAt(0) <= 90)) {
              keyArray[i] = keyArray[i].charCodeAt(0);
          }
      };

      // Применяем функцию шифрования

      let n = 26;
      let messageEncripted = [];

      for (let i = 0, j = 0; i <= messageArray.length - 1; i += 1) {
          if ((messageArray[i] >= 65) && (messageArray[i] <= 90)) {
              messageEncripted[i] = String.fromCharCode((((messageArray[i] % n) + (keyArray[j] % n)) % n) + 65);
              j += 1;
          } else {
              messageEncripted[i] = messageArray[i];
          }
      };

      // Выдаем результат
      if (this.name === "direct") {
          messageEncripted = messageEncripted.join('')
          return messageEncripted;
      }
      if (this.name === "reverse") {
          messageEncripted = messageEncripted.reverse().join('')
          return messageEncripted;
      }
  }


  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined) throw 'Error';
    if (key === undefined) throw 'Error';


      // Преобразуем message для работы
      let encryptedMessageUpperCase = encryptedMessage.toUpperCase();
      let encryptedMessageArray = encryptedMessageUpperCase.split('');

      for (let i = 0; i <= encryptedMessageArray.length - 1; i += 1) {
          if ((encryptedMessageArray[i].charCodeAt(0) >= 65) && (encryptedMessageArray[i].charCodeAt(0) <= 90)) {
              encryptedMessageArray[i] = encryptedMessageArray[i].charCodeAt(0);
          }
      };

      // Преобразуем key для работы
      let keyUpperCase = key.toUpperCase();
      let keyArray = keyUpperCase.split('');

      for (let i = 0;  keyArray.length < encryptedMessageArray.length; i += 1) {
          keyArray.push(`${keyArray[i]}`);
          if (i ===  keyArray.length - 1) i = -1;
      }

      while (keyArray.length > encryptedMessageArray.length) {
          keyArray.pop();
      }

      for (let i = 0; i <= keyArray.length - 1; i += 1) {
          if ((keyArray[i].charCodeAt(0) >= 65) && (keyArray[i].charCodeAt(0) <= 90)) {
              keyArray[i] = keyArray[i].charCodeAt(0);
          }
      };

      // Применяем функцию шифрования

      let n = 26;
      let messageDecripted = [];

      for (let i = 0, j = 0; i <= encryptedMessageArray.length - 1; i += 1) {
          if ((encryptedMessageArray[i] >= 65) && (encryptedMessageArray[i] <= 90)) {
              messageDecripted[i] = String.fromCharCode((((encryptedMessageArray[i] - 65) +  n - (keyArray[j] - 65)) % n) + 65);
              j += 1;
          } else {
              messageDecripted[i] = encryptedMessageArray[i];
          }
      };


      // Выдаем результат
      if (this.name === "direct") {
          messageDecripted = messageDecripted.join('')
          return messageDecripted;
      }
      if (this.name === "reverse") {
          messageDecripted = messageDecripted.reverse().join('')
          return messageDecripted;
      }
  }


}

module.exports = VigenereCipheringMachine;
