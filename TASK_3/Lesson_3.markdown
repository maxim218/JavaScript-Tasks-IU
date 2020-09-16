# Формат JSON - особенности

Нельзя преобразовать зацикленную структуру в строку **JSON**

Рассмотрим пример

```
"use strict";

const boy = {name: "George"};
const girl = {name: "Ann"};

boy.pair = girl;
girl.pair = boy;

try {
    const jsonString = JSON.stringify(boy);
} catch (err) {
    console.error(err.message);
}
```

Результат работы программы

```
Converting circular structure to JSON
    --> starting at object with constructor 'Object'
    |     property 'pair' -> object with constructor 'Object'
    --- property 'pair' closes the circle
```

Таким образом, если мы планируем преобразовать объект в строку **JSON**, надо проектировать структуру объекта с учетом запрета зацикленных структур








