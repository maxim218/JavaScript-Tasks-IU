# Массивы

Создадим пустой массив массив

```
let arr = [];
```

Добавим к концу массива четыре элемента

```
arr.push(100);
arr.push(75);
arr.push(218);
arr.push(150);
```

Получаем длину массива и выводим её на экран

```
let n = arr.length;
console.log("Length: " + n);
```

Перебираем все элементы массива и выводим их на экран

```
for(let i = 0; i < n; i++) {
    let x = arr[i];
    console.log(x);
}
```

Таким образом, полный код имеет содержимое

```
"use strict";

let arr = [];

arr.push(100);
arr.push(75);
arr.push(218);
arr.push(150);

let n = arr.length;
console.log("Length: " + n);

for(let i = 0; i < n; i++) {
    let x = arr[i];
    console.log(x);
}
```

Напишем код для увеличения всех ячеек массива на 1000

```
for(let i = 0; i < n; i++) {
    arr[i] = arr[i] + 1000;
}
```

