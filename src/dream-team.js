const CustomError = require("../extensions/custom-error");


module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === true) {
    let password = '';
    let eachMember;
    let firstLetter;
    for (index1 = 0; index1 < members.length; index1 += 1) {
      eachMember = members[index1];
      if (typeof eachMember === 'string') {
        for (index2 = 0; index2 < eachMember.length; index2 += 1) {
        firstLetter = eachMember[index2];
        if (firstLetter !== ' ') {
          password += firstLetter;
          break;
        };
        }
      }
    }
    return password.toUpperCase().split('').sort().join('');
  } else {
    return false;
  }
};
