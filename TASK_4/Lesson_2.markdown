# Получение HTML страниц

Напишем код для получения содержимого HTML страниц с сервера

```
"use strict";

const fs = require("fs");

const express = require("express");

const app = express();
const port = 5015;
app.listen(port);
console.log("My server on port " + port);

app.get("/me/page", function(request, response) {
    const nameString = request.query.p;
    if (fs.existsSync(nameString)) {
        const contentString = fs.readFileSync(nameString, "utf8");
        response.end(contentString);
    } else {
        const contentString = fs.readFileSync("bad.html", "utf8");
        response.end(contentString);
    }
});
```

Создадим файл *bad.html* в той же директории, где лежит файл *index.js*

Код файла *bad.html*

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Ресурс отсутствует</title>
    <style>
        body {
            font-family: Geneva, Arial, Helvetica, sans-serif;
            padding: 35px;
            background: wheat;
        }

        h1 {
            color: red;
        }

        h3 {
            color: green;
        }
    </style>
</head>
<body>
    <h1>Ресурс отсутствует</h1>
    <h3>Это код страницы bad.html</h3>
</body>
</html>
```

Создадим файл *a.html* в той же директории, где лежит файл *index.js*

Код файла *a.html*

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Страница A</title>
</head>
<body>  
    <h1>Страница A</h1>
</body>
</html>
```

Запускаем программу

```
npm start
```

Отправим **GET** запрос на сервер с помощью браузера

```
http://localhost:5015/me/page?p=a.html
```

Получаем в ответ от сервера страницу *a.html*

Отправим **GET** запрос на сервер с помощью браузера

```
http://localhost:5015/me/page?p=k.html
```

Получаем в ответ от сервера страницу с информацией об отсутствии ресурса

Таким образом, мы освоили способ раздачи HTML страниц с помощью сервера

