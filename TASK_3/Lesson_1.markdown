# Создание файла с зависимостями

Создадим папку на рабочем столе с именем *my-js-project*

Запускаем **Visual Studio Code**

Нажимаем **File**, затем **Open Folder**

С помощью проводника выбираем папку *my-js-project*

Теперь папка *my-js-project* стала директорией проекта

Запускаем терминал: нажимаем **Terminal**, затем **New Terminal**

В терминал вбиваем

```
npm init --yes
```

Создался файл с именем **package.json**

В файле **package.json** создалось содержимое

```
{
  "name": "my-js-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Установим модуль **fs** для работы с файловой системой

В терминал вбиваем

```
npm install fs --save
```

После этого появилась папка **node_modules**

В данной папке хранятся установленные библиотечные файлы

В файле **package.json** появился раздел, в котором описываются установленные нами библиотеки

```
"dependencies": {
    "fs": "0.0.1-security"
}
```

Из раздела **scripts** удалим раздел **test**, так как пока мы не собираемся писать тесты

Отредактируем раздел **scripts** следующим образом

```
"scripts": {
    "start": "node index.js"
}
```

Создаем файл **index.js**

Пишем в нем код

```
"use strict";

console.log("Hello");
console.log("World");
```

Вбиваем в терминал 

```
npm start
```

После этого будет запущен файл **index.js**

Результат работы программы

```
Hello
World
```

Полное содержимое файла **package.json**

```
{
  "name": "my-js-project",
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
    "fs": "0.0.1-security"
  }
}
```

Таким образом, мы создали файл с зависимостями, установили библиотеку для работы с файлами, а также написали скрипт **start** для запуска файла **index.js**

