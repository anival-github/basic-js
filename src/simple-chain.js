const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain = this.chain.concat(`(  )~~`)
    } else {
      this.chain = this.chain.concat(`( ${value} )~~`)
    }
    return this
  },
  removeLink(position) {
    if (Number.isFinite(position) !== true) {
      this.chain = [];
      throw "Error"
    }
    if (Number.isInteger(position) !== true) {
      this.chain = [];
      throw "Error"
    }
    if (position < 1 || position > this.chain.length) {
      this.chain = [];
      throw "Error"
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let a = this.chain.join("").slice(0, -2);
    this.chain = [];
    return a;
  }
};

module.exports = chainMaker;
