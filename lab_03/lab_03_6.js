"use strict";

const fs = require("fs");

function maxExition(obj) {
  let i = 0;
  let flag = true;

  while (i < 5000 && flag) {
    try {
      const myString = JSON.stringify(obj);
      obj = { deep: obj };
    } catch (err) {
      console.log(err.message);
      flag = false;
    }
    i++;
  }
  return i;
}

let obj = {};
let Qty = maxExition(obj);
console.log(Qty);
