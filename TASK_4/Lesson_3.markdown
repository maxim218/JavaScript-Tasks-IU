# Работа с формами

Изменим код страницы *a.html*

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Страница A</title>
</head>
<body>  
    <h1>Страница A</h1>
    <form method="GET" action="/calculate/sum">
        <p>Введите A</p>
        <input name="a" spellcheck="false" autocomplete="off">
        <p>Введите B</p>
        <input name="b" spellcheck="false" autocomplete="off">
        <br>
        <br>
        <input type="submit" value="Отправить запрос">
    </form>
</body>
</html>
```

Добавим обработку запроса на поиск суммы в файле *index.js*

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

app.get("/calculate/sum", function(request, response) {
    const a = request.query.a;
    const b = request.query.b;
    const aInt = parseInt(a);
    const bInt = parseInt(b);
    const sInt = aInt + bInt;
    const answerJSON = JSON.stringify({result: sInt});
    response.end(answerJSON);
});
```

Запускаем программу

```
npm start
```

Заходим через браузер по адресу

```
http://localhost:5015/me/page?p=a.html
```

Получаем страницу с двумя полями ввода и кнопкой

Вбиваем в поля ввода числа и нажимаем на кнопку *"Отправить запрос"*

После этого перед нами появится результат вычисления суммы чисел

Таким образом, мы научились работать с формами ввода на HTML странице



