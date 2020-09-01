# Функции

Напишем функцию для получения суммы целых чисел на отрезке

```
"use strict";

function getTotal(a, b) {
    let total = 0;
    for(let i = a; i <= b; i++) total += i;
    return total;
}

let s = getTotal(8, 12);
console.log("Result: " + s);
```

Напишем функцию для умножения каждой ячейки массива на два

```
function mulTwo(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
}
```

Напишем функцию для вывода всех ячеек массива на экран

```
function renderArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```

Протестируем написанные функции

```
let arrayIntegers = [];

arrayIntegers.push(12);
arrayIntegers.push(-7);
arrayIntegers.push(45);
arrayIntegers.push(8);

mulTwo(arrayIntegers);

renderArray(arrayIntegers);
```

Результат работы программы

```
24
-14
90
16
```

Следует обратить внимание: функция *mulTwo* принимает на вход ссылку на участок памяти, в котором хранится массив

Внутри функции *mulTwo* произошло изменение ячеек массива

Таким образом, содержимое массива *arrayIntegers* было успешно изменено

Полный код программы

```
"use strict";

function mulTwo(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
}

function renderArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let arrayIntegers = [];

arrayIntegers.push(12);
arrayIntegers.push(-7);
arrayIntegers.push(45);
arrayIntegers.push(8);

mulTwo(arrayIntegers);

renderArray(arrayIntegers);
```

