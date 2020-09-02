# Основы ООП

Напишем класс *SumFinder*

В данном классе будет:

* конструктор для инициализации полей
* метод для вывода значений полей на экран
* метод для получения суммы полей

Код класса *SumFinder*

```
class SumFinder {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    renderFields() {
        let messageA = "A: " + this.a;
        let messageB = "B: " + this.b;
        let fullMessage = messageA + " " + messageB;
        console.log(fullMessage);
    }

    getSum() {
        let s = this.a + this.b;
        return s;
    }
}
```

Создадим два экземпляра класса

```
let first = new SumFinder(2, 7);
let second = new SumFinder(100, 45);
```

Выведем поля экземпляров класса на экран

```
first.renderFields();
second.renderFields();
```

Получим значения суммы и выведем полученные значения на экран

```
let firstSumValue = first.getSum();
let secondSumValue = second.getSum();

console.log(firstSumValue);
console.log(secondSumValue);
```

Результат работы программы

```
A: 2 B: 7
A: 100 B: 45
9
145
```

Полный код программы

```
"use strict";

class SumFinder {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    renderFields() {
        let messageA = "A: " + this.a;
        let messageB = "B: " + this.b;
        let fullMessage = messageA + " " + messageB;
        console.log(fullMessage);
    }

    getSum() {
        let s = this.a + this.b;
        return s;
    }
}

let first = new SumFinder(2, 7);
let second = new SumFinder(100, 45);

first.renderFields();
second.renderFields();

let firstSumValue = first.getSum();
let secondSumValue = second.getSum();

console.log(firstSumValue);
console.log(secondSumValue);
```

Таким образом, мы разобрали простой пример работы с **ООП** в JavaScript

