# Использование setInterval

Функция **setInterval** позволяет циклически вызывать блок кода через равные промежутки времени

Рассмотрим пример использования функции **setInterval**

```
"use strict";

let seconds = 0;

let interval = setInterval(() => {
    seconds++;
    let message = "Seconds: " + seconds;
    console.log(message);
    if(seconds === 10) {
        clearInterval(interval);
    }
}, 1000);
```

В данном коде идет реализация секундомера

В начале создается глобальный счетчик *seconds*

Далее запускается функция **setInterval**

Происходит циклический вызов блока кода, в котором происходим увеличение счетчика, формирование сообщения и вывод его на экран.

При этом каждый раз происходит контроль: при достижении счетчиком значения **10** происходит остановка работы функции **setInterval**

Остановка работы происходит следующим образом

```
clearInterval(interval);
```

Результат работы программы

```
Seconds: 1
Seconds: 2
Seconds: 3
Seconds: 4
Seconds: 5
Seconds: 6
Seconds: 7
Seconds: 8
Seconds: 9
Seconds: 10
```

