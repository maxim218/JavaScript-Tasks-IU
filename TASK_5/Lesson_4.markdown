# Специальные символы

Напишем код сервера, который выполняет следующее:

* при запросе на **/page** выдаёт страницу
* при запросе на **/record** выдаёт запись из объекта

Пишем в файле **index.js**

Импорт библиотеки и запуск сервера

```
"use strict";

// импортируем библиотеку
const express = require("express");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port} \n\n`);
```

Задание заголовков в ответ клиенту

```
// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
```

Выдача страницы клиенту

```
// выдать страницу
app.get("/page", function(request, response) {
    response.sendFile(__dirname + "/" + "page.html");
});
```

Создание глобального объекта с записями

В глобальном объекте названия полей содержат **специальные символы**

```
// глобальный объект
const globalObject = {
    "Максим_%_?_&_11": 100,
    "Нина_%_?_&_22": 200,
    "Георгий_%_?_&_33": 300,
    "Дмитрий_%_?_&_44": 400
};
```

Выдача содержимого записи по ключу

```
// выдать запись
app.get("/record", function(request, response) {
    console.log(request.url);
    const key = request.query.k;
    const value = globalObject[key] || null;
    console.log(`Key: ${key}`);
    console.log(`Value: ${value}`);
    console.log("\n");
    response.end(JSON.stringify({
        k: key,
        v: value
    }));
});
```

Таким образом, полный код файла **index.js** имеет содержимое

```
"use strict";

// импортируем библиотеку
const express = require("express");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port} \n\n`);

// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// выдать страницу
app.get("/page", function(request, response) {
    response.sendFile(__dirname + "/" + "page.html");
});

// глобальный объект
const globalObject = {
    "Максим_%_?_&_11": 100,
    "Нина_%_?_&_22": 200,
    "Георгий_%_?_&_33": 300,
    "Дмитрий_%_?_&_44": 400
};

// выдать запись
app.get("/record", function(request, response) {
    console.log(request.url);
    const key = request.query.k;
    const value = globalObject[key] || null;
    console.log(`Key: ${key}`);
    console.log(`Value: ${value}`);
    console.log("\n");
    response.end(JSON.stringify({
        k: key,
        v: value
    }));
});
```

Создадим файл **page.html**

Файл **page.html** должен находиться в той же папке, что и файл **index.js**

Содержимое файла **page.html**

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Страница</title>
</head>
<body>
    
<h1>Страница</h1>

<button onclick="getRecord()">Отправить запрос</button>

<script>
    "use strict";

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

    // ввод ключа и отправка запроса на сервер
    function getRecord() {
        // ввод строки и валидация
        const input = prompt("Введите ключ", "");
        if(!input) return;
        if(!input.trim()) return;

        // формирование url
        const a = input.trim();
        console.log(a);
        const b = encodeURIComponent(a);
        console.log(b);
        const url = `/record?k=${b}`;
        console.log(url);

        // отправка запроса на сервер
        ajaxGet(url, function(answerString) {
            const answerObject = JSON.parse(answerString);
            const message = `Ключ: ${answerObject.k}` + "\n" + `Значение: ${answerObject.v}`;
            alert(message);
        });
    }
</script>

</body>
</html>
```

Запускаем программу

```
npm start
```

С помощью браузера заходим по адресу

```
http://localhost:5000/page
```

Появляется страница

Нажимаем на кнопку **"Отправить запрос"**

Появляется диалоговое окно с полем ввода

Вбиваем в поле ввода ключ

```
Георгий_%_?_&_33
```

Идёт отправка запроса на сервер и получение ответа

Далее появляется диалоговое окно с текстом

```
Ключ: Георгий_%_?_&_33
Значение: 300
```

В *JavaScript* коде страницы была использована функция

```
encodeURIComponent
```

Она позволила преобразовать специальные символы для их передачи по сети

Таким образом, мы научились работать со специальными символами в запросах






