# POST запросы в AJAX

Основное отличие **POST** запросов от **GET** запросов:

У **POST** запросов есть **тело**

Добавим код к файлу **index.js**

В этом коде идёт описание функции загрузки тела **POST** запроса

```
// body
function loadBody(request, callback) {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        callback(body);
    });
}
```

Добавим код к файлу **index.js**

В этом коде происходит:

* приём **POST** запроса
* загрузка тела **POST** запроса
* извлечение полей из полученного тела **POST** запроса
* сохранение информации в файл

Содержимое кода

```
// it is post
app.post("/save/info", function(request, response) {
    loadBody(request, function(body) {
        const obj = JSON.parse(body);
        const a = obj["a"];
        const b = obj["b"];
        const c = obj["c"];
        const contentString = `A: ${a} B: ${b} C: ${c}`;
        fs.writeFileSync("file.txt", contentString);
        response.end(JSON.stringify({
            result: "Save content ok"
        }));
    });
});
```

Для сохранения информации в файл использовалась **fs.writeFileSync**

Подключение библиотеки **fs** было произведено в начале программы

```
"use strict";

// импортируем необходимые библиотеки
const express = require("express");
const fs = require("fs");
```

Создадим в папке **static** файл **secondPage.html**

Код файла **secondPage.html**

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Тестируем Post запросы</title>
</head>
<body>

<h1>Тестируем Post запросы</h1>

<button onclick="makeAction()">Отправить запрос</button>

<script>
    "use strict";

    function ajaxPost(urlString, bodyString, callback) {
        let r = new XMLHttpRequest();
        r.open("POST", urlString, true);
        r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        r.send(bodyString);
        r.onload = function() {
            callback(r.response);
        }
    }

    function makeAction() {
        const inputMessage = "Введите 3 числа через пробел";
        const inputDefault = "0 0 0";
        const input = prompt(inputMessage, inputDefault);

        if(!input) return;
        if(!input.trim()) return;

        const arr = input.trim().split(" ");
        const a = arr[0];
        const b = arr[1];
        const c = arr[2];

        ajaxPost("/save/info", JSON.stringify({
            a, b, c
        }), function(answerString) {
            const answerObject = JSON.parse(answerString);
            const result = answerObject.result;
            alert(result);
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
http://localhost:5000/secondPage.html
```

Нажимаем на кнопку с надписью *"Отправить запрос"*

Вводим 3 числа через пробел

После этого появляется диалоговое окно с надписью *"Save content ok"*

Смотрим содержимое папки с нашим проектом

В ней должен появиться **file.txt** с созданным нами содержимым

Полный код файла **index.js**

```
"use strict";

// импортируем необходимые библиотеки
const express = require("express");
const fs = require("fs");

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

// body
function loadBody(request, callback) {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        callback(body);
    });
}

// it is post
app.post("/save/info", function(request, response) {
    loadBody(request, function(body) {
        const obj = JSON.parse(body);
        const a = obj["a"];
        const b = obj["b"];
        const c = obj["c"];
        const contentString = `A: ${a} B: ${b} C: ${c}`;
        fs.writeFileSync("file.txt", contentString);
        response.end(JSON.stringify({
            result: "Save content ok"
        }));
    });
});
```

Таким образом, мы научились работать с **POST** запросами




