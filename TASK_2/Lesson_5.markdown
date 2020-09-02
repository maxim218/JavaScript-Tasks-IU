# Основы ООП - Наследование

Рассмотрим пример наследования

```
"use strict";

class SquareCounter {
    initAB(a, b) {
        this.a = a;
        this.b = b;
    }

    calcSquare() {
        return this.a * this.b;
    }
}

class VolumeCounter extends SquareCounter {
    initH(h) {
        this.h = h;
    }

    calcVolume() {
        return this.h * this.calcSquare();
    }
}

let obj = new VolumeCounter();
obj.initAB(2, 5);
obj.initH(7);
let v = obj.calcVolume();
console.log(v);
```

В данном примере класс *VolumeCounter* наследует поля и методы класса *SquareCounter*

Результат работы программы

```
70
```

# Стрелочные функции

Рассмотрим пример использования стрелочной функции

```
"use strict";

class PerimeterCounter {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    calcPerimeter() {
        let funcSum = () => {
            return this.a + this.b;
        }
        let p = funcSum() * 2;
        return p;
    }
}

let obj = new PerimeterCounter(12, 18);
let answer = obj.calcPerimeter();
console.log(answer);
```

В данном примере используется локальная стрелочная функция *funcSum*

Стрелочная функция *funcSum* внутри себя обращается к полям объекта через **this**

У функции есть доступ к **this** объекта

В этом заключается главная особенность **стрелочных** функций

Результат работы программы

```
60
```



