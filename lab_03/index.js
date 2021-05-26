"use strict";

const readlineSync = require("readline-sync");
const fs = require("fs");

const a = readlineSync.question("Input expansion: ");
const folder = readlineSync.question("Input way: ");

const arr = fs.readdirSync(folder);
console.log(arr);
let dot = ".";
for (let i = 0; i < arr.length; i++) {
  if (arr[i].split(dot)[1] === a) {
    console.log(arr[i]);
    console.log(fs.readFileSync("./" + folder + "/"+ arr[i], "utf8"));
  }
}
