# Взаимодействие между серверами

Создадим сервер для приёма **POST** запросов и вычисления суммы чисел

Создаём файл с зависимостями

```
npm init --yes
```

Устанавливаем фреймворк **express**

```
npm install express --save
```

Создаём файл **index.js**

Пишем в файле **index.js**

```
"use strict";

// импорт библиотеки
const express = require("express");

// запускаем сервер
const app = express();
const port = 5002;
app.listen(port);
console.log("Server on port " + port);

// заголовки для ответа
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// загрузка тела
function loadBody(request, callback) {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        callback(body);
    });
}

// приём запроса
app.post("/query/calculate", function(request, response) {
    loadBody(request, function(body) {
        const obj = JSON.parse(body);
        const x = obj.x;
        const y = obj.y;
        const s = parseInt(x) + parseInt(y);
        response.end(JSON.stringify({
            answer: s
        }));
    });
});
```

Запускаем программу

```
node index.js
```

Таким образом, мы создали сервер для приёма **POST** запросов и вычисления суммы чисел

# Сервер для отправки запросов на другой сервер

Создадим второй сервер

Создаём **новую папку** и открываем терминал по адресу папки

Создаём файл с зависимостями

```
npm init --yes
```

Устанавливаем фреймворк **express**

```
npm install express --save
```

Устанавливаем библиотеку для отправки запросов с сервера на сервер

```
npm install request --save
```

Таким образом, мы имеем зависимости

```
"dependencies": {
    "express": "^4.17.1",
    "request": "^2.88.2"
}
```

Создаём файл **index.js**

Пишем в файле **index.js**

Импортируем библиотеки и запускаем сервер

```
"use strict";

// импорт библиотек
const express = require("express");
const request = require("request");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port}`);
```

Заголовки для клиента

```
// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
```

Функция для отправки **POST** запроса на другой сервер

```
// функция для отправки POST запроса на другой сервер
function sendPost(url, body, callback) {
    // задаём заголовки
    const headers = {};
    headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
    headers["Connection"] = "close";
    // отправляем запрос
    request.post({
        url: url,
        body: body,
        headers: headers,
    }, function (error, response, body) {
        if(error) {
            callback(null);
        } else {
            callback(body);
        }
    });
}
```

Принимаем **GET** запрос и отправляем **POST** запрос на другой сервер

```
// принимаем GET запрос и отправляем POST запрос на другой сервер
app.get("/sum", function(request, response) {
    const a = request.query.a;
    const b = request.query.b;
    sendPost("http://localhost:5002/query/calculate", JSON.stringify({
        x: a,
        y: b
    }), function(answerString) {
        const answerObject = JSON.parse(answerString);
        const answer = answerObject.answer;
        response.end("Answer: " + answer);
    });
});
```

Таким образом, файл **index.js** имеет содержимое

```
"use strict";

// импорт библиотек
const express = require("express");
const request = require("request");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port}`);

// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// функция для отправки POST запроса на другой сервер
function sendPost(url, body, callback) {
    // задаём заголовки
    const headers = {};
    headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
    headers["Connection"] = "close";
    // отправляем запрос
    request.post({
        url: url,
        body: body,
        headers: headers,
    }, function (error, response, body) {
        if(error) {
            callback(null);
        } else {
            callback(body);
        }
    });
}

// принимаем GET запрос и отправляем POST запрос на другой сервер
app.get("/sum", function(request, response) {
    const a = request.query.a;
    const b = request.query.b;
    sendPost("http://localhost:5002/query/calculate", JSON.stringify({
        x: a,
        y: b
    }), function(answerString) {
        const answerObject = JSON.parse(answerString);
        const answer = answerObject.answer;
        response.end("Answer: " + answer);
    });
});
```

Запускаем программу

```
node index.js
```

При необходимости запустите и предыдущий сервер

С помощью браузера заходим по адресу

```
http://localhost:5000/sum?a=12&b=48
```

Получаем ответ

```
Answer: 60
```

Таким образом, мы смогли реализовать взаимодействие между двумя серверами



