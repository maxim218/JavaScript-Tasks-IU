# AJAX запросы GET

**AJAX** позволяет отправлять запросы на сервер и получать ответы от сервера **без перезагрузки страницы**

Добавим код в файл **index.js** 

В этом коде идет формирование заголовков для отправки их в ответ клиенту

```
// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
```

Добавим код в файл **index.js** 

В этом коде идет прием **GET** запроса для вычисления суммы чисел

```
// получение суммы чисел
app.get("/sum", function(request, response) {
    const a = request.query.a;
    const b = request.query.b;
    const s = parseInt(a) + parseInt(b);
    response.end(JSON.stringify({
        result: s
    }));
});
```

Таким образом, код файла **index.js** имеет содержимое

```
"use strict";

// импортируем библиотеку
const express = require("express");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port}`);

// отправка статических файлов
const way = __dirname + "/static";
app.use(express.static(way));

// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// получение суммы чисел
app.get("/sum", function(request, response) {
    const a = request.query.a;
    const b = request.query.b;
    const s = parseInt(a) + parseInt(b);
    response.end(JSON.stringify({
        result: s
    }));
});
```

Теперь изменим содержимое файла **page.html**

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Моя страница</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <h1>Моя страница</h1>

    <p>Первое число</p>
    <input id="field-first" type="text" spellcheck="false" autocomplete="off">

    <p>Второе число</p>
    <input id="field-second" type="text" spellcheck="false" autocomplete="off">

    <br>
    <br>

    <div id="sum-find-btn" class="btn-class">Получить сумму чисел</div>

    <br>
    <br>

    <h1 id="result-label"></h1>

    <script src="/code.js"></script>
</body>
</html>
```

Теперь изменим код в файле **code.js**

```
"use strict";

window.onload = function() {
    // input fields
    const f1 = document.getElementById("field-first");
    const f2 = document.getElementById("field-second");

    // button
    const btn = document.getElementById("sum-find-btn");

    // label
    const label = document.getElementById("result-label");

    // ajax get
    function ajaxGet(urlString, callback) {
        let r = new XMLHttpRequest();
        r.open("GET", urlString, true);
        r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        r.send(null);
        r.onload = function() {
            callback(r.response);
        };
    };

    // click event
    btn.onclick = function() {
        const a = f1.value;
        const b = f2.value;
        const url = `/sum?a=${a}&b=${b}`;
        ajaxGet(url, function(stringAnswer) {
            const objectAnswer = JSON.parse(stringAnswer);
            const result = objectAnswer.result;
            label.innerHTML = `Ответ: ${result}`;
        });
    };
};
```

Запускаем программу

```
npm start
```

С помощью браузера заходим по адресу

```
http://localhost:5000/page.html
```

Вбиваем в поля ввода 2 числа и нажимаем на кнопку

После этого на странице появится надпись с полученной суммой чисел

Таким образом, мы научились взаимодействовать с сервером без перезагрузки страницы

