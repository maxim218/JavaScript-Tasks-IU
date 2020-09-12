# Формат JSON - получение строки JSON

С помощью формата **JSON** можно представить информацию об объекте в виде строки

Рассмотрим пример преобразования простого объекта в формат строки **JSON**

```
"use strict";

const obj = {};
obj.x = 17;
obj.y = -45;
obj.z = 0;

const jsonString = JSON.stringify(obj);
console.log(jsonString);
```

Результат работы программы

```
{"x":17,"y":-45,"z":0}
```

Мы получили строку, в которой хранится информация об объекте

Рассмотрим более сложный пример

```
"use strict";

const studentObject = {};
studentObject.firstname = "Maxim";
studentObject.lastname = "Johnson";
studentObject.marks = [5, 5, 3, 2, 5];

const jsonString = JSON.stringify(studentObject);
console.log(jsonString);
```

В данном примере полем объекта является массив оценок

Результат работы программы

```
{"firstname":"Maxim","lastname":"Johnson","marks":[5,5,3,2,5]}
```

Есть возможность получить строку **JSON** в более понятном для человека виде

Рассмотрим пример

```
"use strict";

const manA = {
    name: "George",
    age: 25,
};

const manB = {
    name: "Alex",
    age: 29,
};

const swedishFamilyObj = {
    parentA: manA,
    parentB: manB,
};

const jsonString = JSON.stringify(swedishFamilyObj, null, 4);
console.log(jsonString);
```

В данном случае **JSON.stringify** использует 3 параметра

Первый параметр (*swedishFamilyObj*) - значение, преобразуемое в строку JSON

Второй параметр (*null*) - запрещает замены

Третий параметр (*4*) - размер отступов

Результат работы программы

```
{
    "parentA": {
        "name": "George",
        "age": 25        
    },
    "parentB": {
        "name": "Alex",  
        "age": 29        
    }
}
```

Таким образом, мы научились преобразовывать объекты в формат строки **JSON**

