"use strict";

const readlineSync = require("readline-sync");

const fs = require("fs");
const nameString = "a4.txt";

const a = parseInt(readlineSync.question("Input number n: "));

if (isNaN(a)) {
  console.log("Error input");
} else {
  console.log(a);
  let flag = true;
  let ex = 0; //вхождения
  for (let i = 0; i < a; i++) {
    let value = readlineSync.question("Input string: ");
    if (!fs.existsSync(value)) {
      flag = false;
      break;
    }
    const fullContent = fs.readFileSync(value, "utf-8");
    if (ex === 0) {
      fs.writeFileSync(nameString, fullContent);
      ex++;
    } else {
      fs.appendFileSync(nameString, fullContent);
    }
  }
  if (!flag) {
    console.log("ERROR");
  }
}
