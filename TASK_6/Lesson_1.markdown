# Работа с шаблонизатором

Открываем терминал

Создаём файл с зависимостями

```
npm init --yes
```

Устанавливаем фреймворк **express**

```
npm install express --save
```

Устанавливаем шаблонизатор **hbs**

```
npm install hbs --save
```

Таким образом, были установлены зависимости

```
"dependencies": {
    "express": "^4.17.1",
    "hbs": "^4.1.1"
}
```

Создаём файл **index.js**

Пишем в файле **index.js**

Импортируем фреймворк и запускаем сервер

```
"use strict";

// импорт библиотеки
const express = require("express");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port}`);
```

Подключаем шаблонизатор

```
// активируем шаблонизатор
app.set("view engine", "hbs");
```

Заголовки в ответ клиенту

```
// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
```

Выдача страницы с информацией о кафедре

Внутрь страницы будут подставлены значения из объекта

```
// выдача страницы с информацией о кафедре
app.get("/page/department", function(request, response) {
    const infoObject = {
        facultyValue: "Информатика и системы управления",
        departmentValue: "Компьютерные системы и сети",
        indexValue: 6
    };
    response.render("pageDepartment.hbs", infoObject);
});
```

Выдача страницы с массивом учеников

Идёт подстановка элементов массива внутрь страницы

```
// выдача страницы с массивом учеников
app.get("/page/pupils", function(request, response) {
    const infoObject = {
        descriptionValue: "Список учеников",
        pupilsArray: [
            {a: "Петров", b: "Пётр"},
            {a: "Иванов", b: "Иван"},
            {a: "Дмитриев", b: "Дмитрий"},
            {a: "Александров", b: "Александр"}
        ]
    };
    response.render("pagePupils.hbs", infoObject);
});
```

Таким образом, файл **index.js** имеет содержимое

```
"use strict";

// импорт библиотеки
const express = require("express");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port}`);

// активируем шаблонизатор
app.set("view engine", "hbs");

// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// выдача страницы с информацией о кафедре
app.get("/page/department", function(request, response) {
    const infoObject = {
        facultyValue: "Информатика и системы управления",
        departmentValue: "Компьютерные системы и сети",
        indexValue: 6
    };
    response.render("pageDepartment.hbs", infoObject);
});

// выдача страницы с массивом учеников
app.get("/page/pupils", function(request, response) {
    const infoObject = {
        descriptionValue: "Список учеников",
        pupilsArray: [
            {a: "Петров", b: "Пётр"},
            {a: "Иванов", b: "Иван"},
            {a: "Дмитриев", b: "Дмитрий"},
            {a: "Александров", b: "Александр"}
        ]
    };
    response.render("pagePupils.hbs", infoObject);
});
```

Создаём папку с именем **views**

Внутри папки **views** создаём файл **pageDepartment.hbs**

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Кафедра</title>
</head>
<body>

<h1>Кафедра</h1>

Факультет: {{facultyValue}}
<br>
<br>
Кафедра: {{departmentValue}}
<br>
<br>
Номер: {{indexValue}}
<br>
<br>
    
</body>
</html>
```

Внутри папки **views** создаём файл **pagePupils.hbs**

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Ученики</title>
</head>
<body>
    
<h2>
    {{descriptionValue}}
</h2>

{{#each pupilsArray}}
    <div style="background: yellow; margin-bottom: 15px; padding: 8px;">
        Фамилия: {{this.a}} 
        <br>
        Имя: {{this.b}} 
    </div>
{{/each}}

</body>
</html>
```

Запускаем программу

```
node index.js
```

С помощью браузера заходим по адресу

```
http://localhost:5000/page/department
```

Появляется страница с описанием кафедры

С помощью браузера заходим по адресу

```
http://localhost:5000/page/pupils
```

Появляется страница со списком учеников

Таким образом, мы научились использовать шаблонизаторы

