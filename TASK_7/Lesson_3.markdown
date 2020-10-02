# Дочерние процессы

Создаём *новую* папку

Открываем терминал по адресу папки

Создаём файл с зависимостями

```
npm init --yes
```

Устанавливаем библиотеку для работы с процессами

```
npm install child_process --save
```

Таким образом, мы имеем зависимости

```
"dependencies": {
    "child_process": "^1.0.2"
}
```

Создаём в папке файл **a.js**

```
"use strict";

const x = "" + process.argv[2];
const y = "" + process.argv[3];
const result = parseInt(x) + parseInt(y);
console.log("" + result);
```

Создаём в папке файл **b.js**

```
"use strict";

const x = "" + process.argv[2];
const result = parseInt(x) * 2;
console.log("" + result);
```

Создаём в папке файл **index.js**

```
"use strict";

// получаем параметры скрипта
const valueA = "" + process.argv[2];
const valueB = "" + process.argv[3];

// импортируем библиотеку
const execSync = require('child_process').execSync;

// функция для вызова программы и получения результата её работы
function useCmd(s) {
	const options = {encoding: 'utf8'};
	const cmd = s.toString();
	const answer = execSync(cmd, options);
	return answer.toString();
}

// получаем сумму
const sumCommand = `node a.js ${valueA} ${valueB}`;
console.log(sumCommand);
let sum = useCmd(sumCommand);
sum = parseInt(sum);
console.log(sum);

// получаем произведение на два
const mulCommand = `node b.js ${sum}`;
console.log(mulCommand);
let mul = useCmd(mulCommand);
mul = parseInt(mul);
console.log(mul);
```

Запускаем программу

```
node index.js '12' '5'
```

Получаем результат работы программы

```
node a.js 12 5
17
node b.js 17
34
```

Таким образом, мы научились работать с дочерними процессами

