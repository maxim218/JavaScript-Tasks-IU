# Основы ООП - взаимодействие методов

Один метод класса может вызывать внутри себя другой метод класса

Рассмотрим пример взаимодействия методов

```
"use strict";

class PerimeterCounter {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    calcSum() {
        return this.a + this.b;
    }

    calcPerimeter() {
        return 2 * this.calcSum();
    }
}

let x = new PerimeterCounter(2, 3);
let y = new PerimeterCounter(30, 40);

let xPer = x.calcPerimeter();
let yPer = y.calcPerimeter();

console.log(xPer);
console.log(yPer);
```

В данном примере внутри метода *calcPerimeter* используется метод *calcSum*

Для получения доступа к методу *calcSum* был использован **this**

Результат работы программы

```
10
140
```

# Использование композиции объектов

Напишем класс для получения суммы двух чисел

```
class SumFinder {
    init(a, b) {
        this.a = a;
        this.b = b;
    }

    getSum() {
        return this.a + this.b;
    }
}
```

Напишем класс для умножения числа на два

```
class MulTwoFinder {
    init(k) {
        this.k = k;
    }

    getMulTwo() {
        return 2 * this.k;
    }
}
```

Напишем класс для получения периметра прямоугольника

```
class PerimeterFinder {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sumFinderObj = new SumFinder();
        this.mulTwoFinderObj = new MulTwoFinder();
    }

    getPerimeter() {
        this.sumFinderObj.init(this.x, this.y);
        let sum = this.sumFinderObj.getSum();
        this.mulTwoFinderObj.init(sum);
        let mul = this.mulTwoFinderObj.getMulTwo();
        return mul;
    }
}
```

В данном классе полями являются экземпляры других классов

Протестируем класс *PerimeterFinder*

```
let p1 = new PerimeterFinder(7, 8);
let p2 = new PerimeterFinder(30, 70);

let valueP1 = p1.getPerimeter();
let valueP2 = p2.getPerimeter();

console.log(valueP1);
console.log(valueP2);
```

Результат работы программы

```
30
200
```

Полный код программы

```
"use strict";

class SumFinder {
    init(a, b) {
        this.a = a;
        this.b = b;
    }

    getSum() {
        return this.a + this.b;
    }
}

class MulTwoFinder {
    init(k) {
        this.k = k;
    }

    getMulTwo() {
        return 2 * this.k;
    }
}

class PerimeterFinder {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sumFinderObj = new SumFinder();
        this.mulTwoFinderObj = new MulTwoFinder();
    }

    getPerimeter() {
        this.sumFinderObj.init(this.x, this.y);
        let sum = this.sumFinderObj.getSum();
        this.mulTwoFinderObj.init(sum);
        let mul = this.mulTwoFinderObj.getMulTwo();
        return mul;
    }
}

let p1 = new PerimeterFinder(7, 8);
let p2 = new PerimeterFinder(30, 70);

let valueP1 = p1.getPerimeter();
let valueP2 = p2.getPerimeter();

console.log(valueP1);
console.log(valueP2);
```

