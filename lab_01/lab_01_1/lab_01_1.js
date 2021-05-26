"use strict";
class Student {
  name;
  age;
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  output() {
    console.log(this.name + ": " + this.age);
  }
}
class Students {
  arr;

  constructor() {
    this.arr = [];
  }

  addStudent(st) {
    for (const elem of this.arr) {
      if (elem.name === st.name) {
        return -1;
      }
    }
    this.arr.push(st);
    return 0;
  }

  output() {
    for (const elem of this.arr) {
      elem.output();
    }
  }
  upDate(st, nst, nage) {
    if (this.arr.length === 0) {
      return -1;
    }
    for (const elem of this.arr) {
      if (st === elem.name) {
        elem.name = nst;
        elem.age = nage;
      }
    }
  }

  Delete(st) {
    if (this.arr.length === 0) {
      return -1;
    }
    let i = 0;
    for (const elem of this.arr) {
      i++;
      if (st === elem.name) {
        this.arr.splice((i-1), 1);
      }
    }
  }

  getAverageAge() {
    if (this.arr.length === 0) {
      return -1;
    }
    let sum = 0;
    for (const elem of this.arr) {
      sum += elem.age;
    }
    return sum / this.arr.length;
  }

  getHighAge() {
    if (this.arr.length === 0) {
      return -1;
    }

    let maxAge = this.arr[0].age;
    let max = 0;

    for (const elem of this.arr) {
      if (elem.age > maxAge) {
        maxAge = elem.age;
        max = elem;
      }
    }
    console.log("Самый старый ребёнок-  " + max.name + " : " + max.age);
  }

  getPeriodAge(minage, maxage) {
    if (this.arr.length === 0) {
      return -1;
    }
    for (const elem of this.arr) {
      if (elem.age > minage && elem.age < maxage) {
        console.log(
          "В диапозон значений от " +
            minage +
            " до " +
            maxage +
            " входит-" +
            elem.name +
            " : " +
            elem.age
        );
      }
    }
  }

  getFirstB(simb) {
    if (this.arr.length === 0) {
      return -1;
    }
    for (const elem of this.arr) {
      if (elem.name[0] === simb) {
        console.log(
          "Ребёнок начинающ. с буквы " +
            simb +
            " вот-" +
            elem.name +
            " : " +
            elem.age
        );
      }
    }
  }

  getLongLastN(ln) {
    if (this.arr.length === 0) {
      return -1;
    }
    for (const elem of this.arr) {
      if (elem.name.length > ln) {
        console.log(
          "Ребёнок c длинной фамилией " + elem.name + " : " + elem.age
        );
      }
    }
  }

  getAtoY() {
    if (this.arr.length === 0) {
      return -1;
    }
    const vowels = ["A", "E", "I", "O", "U"];
    for (const elem of this.arr) {
      if (vowels.includes(elem.name[0])) {
        console.log(
          "Ребёнок c гласной в начале " + elem.name + " : " + elem.age
        );
      }
    }
  }
  getDeleteSt() {
    if (this.arr.length === 0) {
      return -1;
    }
    this.arr.pop();
    return 0;
  }
}

function testSession() {
  const student = new Student("Seryogina", 4);
  const student2 = new Student("Kozachenko", 15);
  const student3 = new Student("Ivanov", 17);
  const student4 = new Student("Opolov", 19);
  const student5 = new Student("Opol", 40);
  const StudentsArr = new Students();
  StudentsArr.addStudent(student);
  StudentsArr.addStudent(student2);
  StudentsArr.addStudent(student3);
  StudentsArr.addStudent(student4);
  StudentsArr.addStudent(student5);
  StudentsArr.output();
  console.log(StudentsArr.arr.length);
  console.log(StudentsArr.getAverageAge());
  StudentsArr.getHighAge();
  StudentsArr.upDate("Ivanov", "Poluna", 15);
  StudentsArr.output();
  StudentsArr.getPeriodAge(5, 19);
  StudentsArr.getFirstB("P");
  StudentsArr.getLongLastN(6);
  StudentsArr.getAtoY();
  StudentsArr.Delete("Opolov");
  StudentsArr.output();
}

testSession();
