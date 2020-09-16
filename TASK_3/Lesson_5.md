# Работа с файлами

У нас имеется файл **package.json** с содержимым

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

Для установки библиотек из раздела **dependencies** вбиваем в терминал

```
npm install
```

Напишем код для создания файла и сохранения в него содержимого

```
"use strict";

const fs = require("fs");

const nameString = "a.txt";
const contentString = "Hello world" + "\n" + "We love JS";

fs.writeFileSync(nameString, contentString);

console.log("Create File OK");
```

Запускаем программу

```
npm start
```

В программе происходит создание файла с текстом

Напишем программу для получения содержимого текстового файла

```
"use strict";

const fs = require("fs");

const nameString = "a.txt";

const contentString = fs.readFileSync(nameString, "utf8");

console.log(contentString);
```

Запускаем программу

```
npm start
```

В программе происходит считывание содержимого файла и вывод полученного содержимого в терминал

Напишем программу для проверки существования файла

```
"use strict";

const fs = require("fs");

const nameString = "a.txt";

if (fs.existsSync(nameString)) {
    console.log("File exists");
} else {
    console.log("File was not found");
}
```

В программе происходит проверка существования файла

В зависимости от результата проверки в терминал выводится соответствующее сообщение

Напишем программу для удаления текстового файла

```
"use strict";

const fs = require("fs");

const nameString = "a.txt";

if (fs.existsSync(nameString)) {
    fs.unlinkSync(nameString);
    console.log("Delete complete")
} else {
    console.log("File not found");
}
```

В программе происходит проверка существования файла и его удаление (в случае существования)

Напишем программу для получения списка файлов и папок

```
"use strict";

const fs = require("fs");

const folder = "./";

const arr = fs.readdirSync(folder);

console.log("Length: " + arr.length);

for(let i = 0; i < arr.length; i++) {
    const fileName = arr[i];
    console.log(fileName);
}
```

*Следует обратить внимание*: мы использовали **блокирующие** функции для взаимодействия с файловой системой

Мы использовали функции:

* fs.writeFile**Sync**
* fs.readFile**Sync**
* fs.exists**Sync**
* fs.unlink**Sync**
* fs.readdir**Sync**

**Sync** говорит о том, что функция является блокирующей

Таким образом, мы разобрали базовые функции для взаимодействия с файловой системой

