# Строки

Создадим переменные строкового типа и выведем их на экран

```
"use strict";

let x = "hello";
let y = "world";
console.log(x);
console.log(y);
```

Конкатенация (склейка) строк

```
"use strict";

let x = "hello";
let y = "world";

x += " ";
x += "wonderful";
x += " ";
x += y;

console.log(x);
```

При склейке строки с числом будет получаться строка

```
"use strict";

let s = "Hello ";
let x = 2 + 3;
s += x;
console.log(s);
```

Сравнение строк на строгое равенство

```
"use strict";

let x = "maxim";
let y = "maxim";
if(x === y) {
    console.log("OK");
}
```

Получение символа строки под заданным номером

```
"use strict";

let s = "abcdefgh";
let c = s.charAt(5);
console.log(c);
```

