# Получение объекта из строки JSON

Получим объект из строки **JSON**

Рассмотрим пример

```
"use strict";

const jsonString = '{"x":17,"y":-45,"z":0}';

const obj = JSON.parse(jsonString);
console.log("X: " + obj.x);
console.log("Y: " + obj.y);
console.log("Z: " + obj.z);
```

С помощью **JSON.parse** мы получаем объект из строки **JSON**

Результат работы программы

```
X: 17
Y: -45
Z: 0  
```

Рассмотрим более сложный пример

```
"use strict";

const jsonString = '{"firstname":"Maxim","lastname":"Johnson","marks":[5,5,3,2,5]}';

const manObject = JSON.parse(jsonString);

console.log("Firstname: " + manObject.firstname);
console.log("Lastname: " + manObject.lastname);

for(let i = 0; i < manObject.marks.length; i++) {
    const mark = manObject.marks[i];
    console.log("Mark: " + mark);
}
```

В данном примере мы получаем объект из строки **JSON**, в которой хранилась информация о поле типа *массив* 

Результат работы программы

```
Firstname: Maxim
Lastname: Johnson
Mark: 5
Mark: 5
Mark: 3
Mark: 2
Mark: 5
```

Таким образом, мы научились получать объект из строки **JSON**

