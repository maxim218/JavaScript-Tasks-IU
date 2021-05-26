"use strict";

const readlineSync = require("readline-sync");

const arr = [];
const fs = require("fs");
const nameString = "a1.txt";

const a = parseInt(readlineSync.question("Input number n: "));

if (isNaN(a)) {
  console.log("Error input");
} else {
  console.log(a);
  for (let i = 0; i < a; i++) {
    let value = readlineSync.question("Input string: ");
    if (value.length % 2 == 0) {
      arr.push(value);
    }
  }
  const jsonString = JSON.stringify(arr);
  fs.writeFileSync(nameString, jsonString);
  console.log("Create File - OK");
}
