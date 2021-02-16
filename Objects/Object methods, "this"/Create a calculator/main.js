let calculator = {
  // read(a, b) {
  //   this.num1 = a;
  //   this.num2 = b;
  // },
  read() {
    this.num1 = +prompt("num1?", 0);
    this.num2 = +prompt("num2?", 0);
  },

  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
