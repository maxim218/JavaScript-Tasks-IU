# Считывание с клавиатуры

Устанавливаем библиотеку

Вбиваем в терминал

```
npm install readline-sync --save
```

Таким образом, теперь раздел **dependencies** имеет содержимое

```
"dependencies": {
    "fs": "0.0.1-security",
    "readline-sync": "^1.4.10"
}
```

Напишем программу для считывания двух чисел и получения их разности

```
"use strict";

const readlineSync = require('readline-sync');

const a = readlineSync.question("Input A: ");
const b = readlineSync.question("Input B: ");

const result = parseInt(a) - parseInt(b);
console.log(result);
```

Запускаем программу

```
npm start
```

После запуска программа система предложит ввести числа

В программе рассчитается разность введенных чисел

*Следует обратить внимание*: при вычислении разности идет преобразование введенной информации с помощью **parseInt**

Рассмотрим более сложный пример

Напишем программу для циклического ввода строк с клавиатуры

Ввод заканчивается, когда пользователь вводит пустую строку

```
"use strict";

const readlineSync = require('readline-sync');

const arr = [];

let value = true;

while(value !== "") {
    value = readlineSync.question("Input value: ");
    if(value !== "") arr.push(value);
}

for(let i = 0; i < arr.length; i++) {
    const message = i + ") " + arr[i];
    console.log(message);
}
```

Введенные строки добавляются в конец массива

Содержимое массива выводится на экран

Таким образом, мы разобрались с возможностью ввода информации с клавиатуры





