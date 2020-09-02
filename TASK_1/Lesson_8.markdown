# Преобразование типов

Перевод из строки в **целое** число

```
"use strict";

let s = "218";
let n = parseInt(s);
console.log(n);
```

Перевод из строки в **вещественное** число

```
"use strict";

let s = "3.75";
let f = parseFloat(s);
console.log(f);
```

Получение **целой части** числа

```
"use strict";

let f = 3.75;
let n = parseInt(f);
console.log(n);
```

Перевод из числа в строку

```
"use strict";

let n = 15;
let f = 3.45;
let nStr = n + "";
let fStr = f + "";
console.log(nStr);
console.log(fStr);
```

Перевод в **логическую** переменную

```
"use strict";

let n = 25;
let b = !!n;
console.log(b);
```

# Особенности преобразования типов

Пример сложного преобразования типов

```
"use strict";

let message = "218people";
let n = parseInt(message);
console.log(n);
```

Результат работы программы

```
218
```

