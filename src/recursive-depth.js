const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.depth = 1;
  }
  calculateDepth(arr) {
    if (arr.length !== 0) {
      return Array.isArray(arr) ? this.depth + Math.max(...arr.map(t => this.calculateDepth(t))) : 0;
    } else return this.depth
  }
};


