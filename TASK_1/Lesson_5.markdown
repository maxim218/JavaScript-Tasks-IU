# Объекты

Создаем пустой объект

```
let obj = {};
```

Задаем поля объекта и их значения

```
obj["a"] = "hello";
obj["b"] = false;
obj["x"] = 218;
obj["y"] = 3.14;
obj["z"] = "gorgeous";
```

Выводим все поля и их значения на экран

```
for(let key in obj) {
    let value = obj[key];
    let message = key + " : " + value;
    console.log(message);
}
```

При переборе полей объекта порядок **НЕ** гарантируется

Получение значения определённого поля объекта

```
let myX = obj["x"];
console.log(myX);
```

Изменим существующие поля объекта и выведем их на экран

```
obj["x"] = 1234;
obj["z"] = 6789;
console.log(obj["x"]);
console.log(obj["z"]);
```

Таким образом, полный код имеет содержимое

```
"use strict";

let obj = {};

obj["a"] = "hello";
obj["b"] = false;
obj["x"] = 218;
obj["y"] = 3.14;
obj["z"] = "gorgeous";

for(let key in obj) {
    let value = obj[key];
    let message = key + " : " + value;
    console.log(message);
}

let myX = obj["x"];
console.log(myX);

obj["x"] = 1234;
obj["z"] = 6789;
console.log(obj["x"]);
console.log(obj["z"]);
```

