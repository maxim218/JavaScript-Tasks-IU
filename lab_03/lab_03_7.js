"use strict";

const fs = require("fs");

const king = {
  k1: {
    q: 43,
    qw: "female",
    h: {
      pop: 67,
      pip: {
        ip: {
          i: {
            tt: 228,
          },
          p: {
            tf: "angle",
          },
        },
        pi: {
          pp: {
            ytro: "dobroe",
            noch: "xolodnay",
          },
          ii: {
            rich: 25,
            marry: 28,
          },
        },
      },
    },
  },
  k2: {
    qwerty: {
      qwert: {
        qwer: {
          qwe: {
            gg: "end",
          },
        },
      },
    },
  },
  k3: {
    z: {
      x: {
        c: {
          v: {
            b: {
              n: {
                m: {
                  kaef: "imenno",
                },
              },
            },
          },
        },
      },
    },
  },
};
// console.log(king);

const myObjStr = JSON.stringify(king);
const nameFile = "a7.txt";

fs.writeFileSync(nameFile, myObjStr);

const readFile = fs.readFileSync(nameFile, "utf-8");
const mainObj = JSON.parse(readFile);

// console.log(mainObj);

let ways = []; // путь от самого глубокого до начала
function maxFieldEx(obj) {
  let col = 0;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      col = Math.max(maxFieldEx(obj[key]), col);
      ways[col - 1] = key;
    }
  }
  col++;
  return col;
}

maxFieldEx(mainObj);
console.log(ways);
console.log("Deep of OBJ: " + ways.length);
