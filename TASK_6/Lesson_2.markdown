# Сессии в NodeJS

**Cookie** - это набор переменных, передающихся при каждом **HTTP** запросе в формате **ключ - значение**

Мы будем выставлять **Cookie** на стороне *сервера*

Проверять **Cookie** мы тоже будем на стороне *сервера*

При этом **Cookie** хранятся на стороне *клиента* (*браузера*)

Создаём файл с зависимостями

```
npm init --yes
```

Устанавливаем фреймворк **express**

```
npm install express --save
```

Устанавливаем библиотеку для работы с *cookie*

```
npm install cookie-session --save
```

Таким образом, мы используем зависимости

```
"dependencies": {
    "cookie-session": "^1.4.0",
    "express": "^4.17.1"
}
```

Создаём файл **index.js**

Пишем код в файле **index.js**

Импортируем библиотеки и запускаем сервер

```
"use strict";

// импортируем библиотеки
const express = require("express");
const cookieSession = require("cookie-session");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port}`);
```

Задаём параметры сессии

```
// работа с сессией
app.use(cookieSession({
    name: 'session',
    keys: ['hhh', 'qqq', 'vvv'],
    maxAge: 24 * 60 * 60 * 1000 * 365
}));
```

Заголовки в ответ клиенту

```
// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
```

Сохранение *cookie*

```
// сохранить cookie
app.get("/api/save", function(request, response) {
    // получаем параметры запроса
    const login = request.query.login;
    const age = request.query.age;
    // контролируем существование параметров
    if(!login) return response.end("Login not set");
    if(!age) return response.end("Age not set");
    // выставляем cookie
    request.session.login = login;
    request.session.age = age;
    // отправляем ответ об успехе операции
    response.end("Set cookie ok");
});
```

Получение *cookie*

```
// получить cookie
app.get("/api/get", function(request, response) {
    // контролируем существование cookie
    if(!request.session.login) return response.end("Not exists");
    if(!request.session.age) return response.end("Not exists");
    // отправляем ответ с содержимым cookie
    const login = request.session.login;
    const age = request.session.age;
    response.end(JSON.stringify({
        login,
        age
    }));
});
```

Удаление *cookie*

```
// удалить все cookie
app.get("/api/delete", function(request, response) {
    request.session = null;
    response.end("Delete cookie ok");
});
```

Таким образом, файл **index.js** имеет содержимое

```
"use strict";

// импортируем библиотеки
const express = require("express");
const cookieSession = require("cookie-session");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port}`);

// работа с сессией
app.use(cookieSession({
    name: 'session',
    keys: ['hhh', 'qqq', 'vvv'],
    maxAge: 24 * 60 * 60 * 1000 * 365
}));

// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// сохранить cookie
app.get("/api/save", function(request, response) {
    // получаем параметры запроса
    const login = request.query.login;
    const age = request.query.age;
    // контролируем существование параметров
    if(!login) return response.end("Login not set");
    if(!age) return response.end("Age not set");
    // выставляем cookie
    request.session.login = login;
    request.session.age = age;
    // отправляем ответ об успехе операции
    response.end("Set cookie ok");
});

// получить cookie
app.get("/api/get", function(request, response) {
    // контролируем существование cookie
    if(!request.session.login) return response.end("Not exists");
    if(!request.session.age) return response.end("Not exists");
    // отправляем ответ с содержимым cookie
    const login = request.session.login;
    const age = request.session.age;
    response.end(JSON.stringify({
        login,
        age
    }));
});

// удалить все cookie
app.get("/api/delete", function(request, response) {
    request.session = null;
    response.end("Delete cookie ok");
});
```

Запускаем программу

```
node index.js
```

Заходим с помощью браузера по адресу

```
http://localhost:5000/api/get
```

Получаем ответ

```
Not exists
```

Мы получили такой ответ, потому что cookie ещё не созданы

Теперь заходим по адресу

```
http://localhost:5000/api/save?login=george&age=18
```

Мы получаем ответ

```
Set cookie ok
```

Таким образом, мы успешно создали cookie

Теперь получим содержимое cookie

Заходим по адресу

```
http://localhost:5000/api/get
```

Получаем ответ

```
{"login":"george","age":"18"}
```

Теперь удалим созданные ранее cookie

Заходим по адресу

```
http://localhost:5000/api/delete
```

Получаем ответ

```
Delete cookie ok
```

Теперь заходим по адресу

```
http://localhost:5000/api/get
```

Получаем ответ

```
Not exists
```

Таким образом, мы научились работать с cookie

