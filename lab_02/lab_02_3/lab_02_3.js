"use strict";

let num = 0;
let flag = 0;

let first_interval = setInterval(() => {
  if (!flag) {
    num++;
    console.log(num);
    if (num === 10) {
      flag = 1;
    }
  }
}, 2000);

let second_interval = setInterval(() => {
  if (flag) {
    num++;
    console.log(num);
    if (num === 20) {
      flag = 0;
      num = 0;
    }
  }
}, 1000);
