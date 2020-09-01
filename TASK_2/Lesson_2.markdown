# Область видимости - глобальные переменные

В языке JavaScript у переменных *блочная* область видимости

Рассмотрим пример работы с глобальной переменной

```
"use strict";

let valueGlobal = 0;

function addToValue(x) {
    valueGlobal = valueGlobal + x;
}

addToValue(12);
addToValue(18);
addToValue(70);

console.log(valueGlobal);
```

В данном коде используется глобальная переменная *valueGlobal*

Внутри функции *addToValue* происходит изменение глобальной переменной

# Область видимости - процедурный тип параметров

Рассмотрим более сложный пример работы с областью видимости переменных

```
"use strict";

function repeatTheAction(n, myFunc) {
    for(let i = 0; i < n; i++) myFunc(i);
}

let valueGlobal = 0;

function addToValue(x) {
    valueGlobal = valueGlobal + x;
}

repeatTheAction(5, addToValue);

console.log(valueGlobal);
```

Функция *repeatTheAction* циклически (*n* раз) вызывает *myFunc*

При этом *myFunc* принимает на вход текущее значение переменной *i*

В данном коде используется глобальная переменная *valueGlobal*

Внутри функции *addToValue* происходит изменение глобальной переменной

В коде происходит следующий вызов функции *repeatTheAction*

```
repeatTheAction(5, addToValue);
```

При этом функция addToValue взаимодействует с глобальной переменной

Результат работы программы: **10** (0 + 1 + 2 + 3 + 4)

