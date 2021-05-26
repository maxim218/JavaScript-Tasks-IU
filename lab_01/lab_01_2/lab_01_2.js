class Student {
  constructor(gr_name, st_card, marks) {
    this.gr_name = gr_name;
    this.st_card = st_card;
    this.marks = marks;
  }

  get output() {
    return `${this.gr_name} ${this.st_card} ${this.marks}`;
  }
}

class Students {
  constructor() {
    this.arr = [];
  }

  CREATE(st) {
    for (const man of this.arr) {
      if (man.st_card === st.st_card) {
        return false;
      }
    }
    this.arr.push(st);
    return true;
  }

  READ(name) {
    for (const man of this.arr) {
      if (name === man.st_card) {
        console.log(man.output);
      }
    }
    return true;
  }

  UPDATE(st) {
    let j = -1;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].st_card === st.st_card) {
        j = i;
      }
    }
    if (j !== -1) {
      console.log("Invalid read student card");
      return false;
    }
    this.arr.splice(j, 1, st);
    return true;
  }

  DELETE(st) {
    let j = -1;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].gr_name === st.gr_name) {
        j = i;
      }
    }
    if (j !== -1) {
      console.log("Invalid read student card");
      return false;
    }
    this.arr.splice(j, 1);
    return true;
  }

  average_mark_st(st) {
    let n = 0;
    let i = 0;
    for (const mark of st.marks) {
      i++;
      n += mark;
    }
    if (i === 0) {
      console.log("Invalid read marks");
      return false;
    }
    return n / i;
  }

  info_st_group(group) {
    let flag = 0;
    for (const man of this.arr) {
      if (man.gr_name === group) {
        flag = 1;
        console.log(man.output);
      }
    }
    if (flag === 0) {
      console.log("Invalid read info student group");
      return false;
    }
    return true;
  }

  info_best_st_group(gr_name) {
    let len = -1;
    let best_st = undefined;
    for (const man of this.arr) {
      if (man.marks.length > len && man.gr_name === gr_name) {
        len = man.marks.length;
        best_st = man;
      }
    }
    if (len === -1) {
      console.log("Invalid read info student group");
      return false;
    }
    console.log(best_st.output);
    return true;
  }

  info_zero_st() {
    let flag = 0;
    for (const man of this.arr) {
      if (man.marks.length === 0) {
        flag = 1;
        console.log(man.output);
      }
    }

    if (flag !== 0) {
      console.log("Invalid read student card");
      return false;
    }

    return true;
  }
}

function main() {
  let st1 = new Student("abc", 123, [4, 3, 2]);
  let st11 = new Student("abc", 1323, [1, 3, 2]);
  let st2 = new Student("qwerty", 523123133, [5, 5, 2]);
  let st3 = new Student("rtyuifgh", 565, [4, 2, 2]);
  let st4 = new Student("rqwe", 55, [4, 2, 2]);

  let sts = new Students();

  sts.CREATE(st1);
  sts.CREATE(st11);
  sts.CREATE(st2);
  sts.CREATE(st3);

  sts.DELETE(st4);

  console.log(sts.READ(st1));

  let st5 = new Student("qwerty", 5233, [5, 5, 5]);
  sts.UPDATE(st5);
  console.log(sts.READ(st2));

  console.log("Среднее значение: " + sts.average_mark_st(st1));

  console.log("Информация: " + sts.info_st_group("abc"));

  console.log("The best one: " + sts.info_best_st_group("abc"));

  let st6 = new Student("rqwe", 55, []);
  sts.CREATE(st6);
  console.log(sts.info_zero_st());
}

main();
