# Получение статических файлов

Запускаем терминал по адресу папки

Вбиваем в терминал

```
npm init --yes
```

Устанавливаем фреймворк *Express*

```
npm install express --save
```

Редактируем раздел **scripts** в файле **package.json**

```
"scripts": {
    "start": "node index.js"
}
```

Таким образом, получаем содержимое файла **package.json**

```
{
  "name": "my-project-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

Создаём файл **index.js**

Пишем код в файле **index.js**

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
```

Создаём папку **static**

В папке **static** создаём 3 файла:

* page.html
* code.js
* style.css

Содержимое файла *style.css*

```
body {
    padding: 30px;
    background: burlywood;
    font-family: Geneva, Arial, Helvetica, sans-serif;
}

.btn-class {
    padding: 6px;
    background: blueviolet;
    color: white;
    cursor: pointer;
    display: inline-block;
}
```

Содержимое файла *code.js*

```
"use strict";

window.onload = function() {
    // get links to buttons
    const a = document.getElementById("a-btn-id");
    const b = document.getElementById("b-btn-id");

    // event click
    a.onclick = function() {
        alert("I am A");
    };

    // event click
    b.onclick = function() {
        alert("I am B");
    };
};
```

Содержимое файла *page.html*

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

    <div id="a-btn-id" class="btn-class">Это A</div>

    <div id="b-btn-id" class="btn-class">Это B</div>

    <script src="/code.js"></script>
</body>
</html>
```

Таким образом, теперь у нас в папке **static** 3 файла

Запускаем программу

```
npm start
```

С помощью браузера заходим по адресу

```
http://localhost:5000/page.html
```

В браузере должна открыться страница с двумя кнопками

При нажатии на кнопки появляются диалоговые окна

Таким образом, мы изучили ещё один способ отправки клиенту статических файлов


