"use strict";

const readlineSync = require("readline-sync");
const fs = require("fs");
let dot = ".";

function searchFile(wayF) {
  let direct = fs.readdirSync(wayF);
  for (let file of direct) {
    let stat = fs.statSync(wayF + file);
    if (!stat.isFile()) {
      let nwayF = wayF + file + "/";
      searchFile(nwayF);
    } else {
      const fullContent = fs.readFileSync(wayF + file, "utf-8");
      if (fullContent.length <= 10 && file.split(dot)[1] === "txt") {
        console.log(file);
      }
    }
  }
}

searchFile("./");
