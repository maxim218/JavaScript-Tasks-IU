# Использование setTimeout

Функция **setTimeout** позволяет выполнить блок кода через заданный промежуток времени

Рассмотрим пример использования **setTimeout**

```
"use strict";

let messageA = "Hello world";
let messageB = "We love JavaScript";
let messageC = "Prolog is coming";

setTimeout(() => {
    console.log(messageA);
    console.log(messageB);
    console.log(messageC);
}, 4000);
```

Блок кода, в котором идет вывод сообщений на экран, будет выполнен через *4 секунды* после запуска программы

# Контроль выполнения

Рассмотрим сложный пример

```
"use strict";

let timeA = parseInt(Math.random() * 5000);
let timeB = parseInt(Math.random() * 5000);
let timeC = parseInt(Math.random() * 5000);

let okCount = 0;

function controlOk() {
    okCount++;
    if(okCount === 3) {
        console.log("Complete");
    }
}

setTimeout(() => {
    console.log("A"); 
    controlOk();
}, timeA);

setTimeout(() => {
    console.log("B"); 
    controlOk();
}, timeB);

setTimeout(() => {
    console.log("C"); 
    controlOk();
}, timeC);
```

Вначале программы происходит генерация случайным образом трех чисел

Эти числа хранят в себе время ожидания для каждого из трех **setTimeout**

Далее создается глобальный счетчик *okCount*

Он отвечает за хранение количества выполненных **setTimeout**

Далее идет создание функции *controlOk*

```
function controlOk() {
    okCount++;
    if(okCount === 3) {
        console.log("Complete");
    }
}
```

В этой функции идет увеличение счетчика на единицу

Если счетчик достигает значения 3, это означает, что все **setTimeout** были успешно выполнены

Далее идет вызов трех независимых **setTimeout**

```
setTimeout(() => {
    console.log("A"); 
    controlOk();
}, timeA);

setTimeout(() => {
    console.log("B"); 
    controlOk();
}, timeB);

setTimeout(() => {
    console.log("C"); 
    controlOk();
}, timeC);
```

При вызове каждого **setTimeout** идет вывод соотвествующего сообщения на экран

После этого вызывается функция для увеличения глобального счетчика

При запуске программы мы **не** знаем, в каком порядке будут выведены буквы, так как значения переменных ожидания генерируются случайным образом

Пример вывода программы

```
B
C
A
Complete
```

