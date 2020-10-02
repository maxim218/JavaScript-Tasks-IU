# Передача параметров скрипту

Создаём новую папку

Создаём в папке файл **index.js**

Пишем в файле **index.js**

```
"use strict";

// получаем параметры скрипта
const manSurname = "" + process.argv[2];
const manName = "" + process.argv[3];
const manAge = "" + process.argv[4];

// формируем сообщение
const surnameMessage = "Фамилия: " + manSurname;
const nameMessage = "Имя: " + manName;
const ageMessage = "Возраст: " + manAge;
const finanMessageValue = surnameMessage + "\n" + nameMessage + "\n" + ageMessage;

// вывод сообщения на экран
console.log(finanMessageValue);
```

Запускаем терминал по адресу папки

```
node index.js 'Sidorov' 'Maxim' '18'
```

Получаем результат работы программы

```
Фамилия: Sidorov
Имя: Maxim      
Возраст: 18     
```

Таким образом, мы научились передавать параметры скрипту и принимать данные параметры

