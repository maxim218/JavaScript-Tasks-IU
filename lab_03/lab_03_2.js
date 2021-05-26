"use strict";

const readlineSync = require("readline-sync");

const arr = [];
const fs = require("fs");
const nameString = "a2.txt";

if (fs.existsSync(nameString)) {
  console.log("File exists");
  const MyStr = fs.readFileSync(nameString, "utf-8");
  const MyStrPs = JSON.parse(MyStr);
  console.log(MyStrPs);
  const simb = ["a", "e", "i", "o", "u", "y"];
  for (let i = 0; i < MyStrPs.length; i++) {
    let flag = true;
    for (let j = 0; j < MyStrPs[i].length; j++) {
      if (!simb.includes(MyStrPs[i][j].toLowerCase())) {
        flag = false;
        break;
      }
    }
    if (flag) {
      console.log("С гласной: " + MyStrPs[i]);
    }
  }
} else {
  console.log("File was not found");
}
