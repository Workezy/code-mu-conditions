// Конструкция switch-case в JavaScript
console.log("Конструкция switch-case в JavaScript");
let lang = "de";
switch (lang) {
  case "ru":
    console.log("рус");
    break;
  case "en":
    console.log("анг");
    break;
  case "de":
    console.log("нем");
    break;
  default:
    console.log("язык не поддерживается");
    break;
}

// Тернарный оператор в JavaScript
console.log("Тернарный оператор в JavaScript");
let num6 = 1;
let res = num6 >= 0 ? 1 : 2;
console.log(res);

// Логические операции в JavaScript
console.log("Логические операции в JavaScript");
// 1
let a = 2 * (3 - 1);
let b = 6 - 2;
console.log(a == b);
// 2
let a1 = 5 * (7 - 4);
let b1 = 1 + 2 + 7;
console.log(a1 > b1);
// 3
let a2 = 2 ** 4;
let b2 = 4 ** 2;
console.log(a2 != b2);

// Функция confirm в JavaScript
let acceptAge = confirm("Если вам уже 18 лет?");
if (acceptAge) {
  console.log("Текст для взрослых");
} else {
  console.log("Доступ запрещен");
}

// Область видимости переменных в if-else в JavaScript
console.log("Область видимости переменных в if-else в JavaScript");
let age = 17;
let adult;
if (age >= 18) {
  adult = true;
} else {
  adult = false;
}

console.log(adult);

// Нюансы области видимости переменных в конструкциях if-else в JavaScript
console.log(
  "Нюансы области видимости переменных в конструкциях if-else в JavaScript"
);
// 1
let age2 = 17;
let adult2;

if (age2 >= 18) {
  adult2 = true;
} else {
  adult2 = false;
}

console.log(adult2);
// 2
let age3 = 17;
let adult3;

if (age3 >= 18) {
  adult3 = true;
} else {
  adult3 = false;
}

console.log(adult3);
// 3
let age4 = 17;
let res2;

if (age4 >= 18) {
  if (age4 <= 23) {
    res2 = "от 18 до 23";
  } else {
    res2 = "больше 23";
  }
} else {
  res2 = "меньше 18";
}

console.log(res2);
// 4
let age5 = 34;
let res3;

if (age5 >= 18) {
  if (age5 <= 23) {
    res3 = "от 18 до 23";
  } else {
    res3 = "больше 23";
  }
} else {
  res3 = "меньше 18";
}

console.log(res3);

// Проверка частей часа через if-else в JavaScript
console.log("Проверка частей часа через if-else в JavaScript");
let min = 21;
if (min >= 0 && min <= 20) {
  console.log("первая треть");
} else if (min >= 21 && min <= 40) {
  console.log("второя треть");
} else if (min >= 41 && min <= 60) {
  console.log("третья треть");
} else {
  console.log("введенные данные не число или больше 60");
}

// Проверка длины строк и массивов в JavaScript
console.log("Проверка длины строк и массивов в JavaScript");
let arr = [1, 2, 3];
let sum1 = 0;
if (arr.length == 3) {
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
  }
  console.log(sum1);
} else {
  console.log("в массиве не 3 элемента");
}

// Проверка символов строки в JavaScript
console.log("Проверка символов строки в JavaScript");
// 1
let str = "asd";
if (str[0] == "a") {
  console.log("+++");
} else {
  console.log("---");
}
// 2
let str2 = "dsa";
if (str2[0] == "x") {
  console.log("+++");
} else {
  console.log("---");
}
// 3
let str3 = "basd";
if (str3[0] == "a" || str3[0] == "b") {
  console.log("+++");
} else {
  console.log("---");
}

// Проверка цифр числа в JavaScript
console.log("Проверка цифр числа в JavaScript");
// 1
let nam = String(20);
let lastNam = nam[nam.length - 1];
if (lastNam == 0) {
  console.log("+++");
} else {
  console.log("---");
}
// 2
let nam2 = String(24);
let lastNam2 = nam2[nam2.length - 1];
if (
  lastNam2 == 0 ||
  lastNam2 == 2 ||
  lastNam2 == 4 ||
  lastNam2 == 6 ||
  lastNam2 == 8
) {
  console.log("+++");
} else {
  console.log("---");
}

// Проверка остатка от деления в JavaScript
console.log("Проверка остатка от деления в JavaScript");
// 1
let nam3 = 12;
if (nam3 % 2 == 0) {
  console.log("четное");
} else {
  console.log("нечетное");
}
// 2
let nam4 = 3;
console.log(nam4 % 3 == 0 ? true : false);

// Поиск ошибок в коде с условиями JavaScript
console.log("Поиск ошибок в коде с условиями JavaScript");
// 1 - нет ошибок, выдаст +++

// 2 - есть ошибка, из-за типов данных при проверке

// 3 - num1 + num2 выведет 12, т.к незя вычислять внутри Number, надо Number(x) + Number(x)

// 4 - ошибка, т.к нельзя найти длину числа, надо привести его сначало к string

// 5 - неверно, т.к надо [0] ставить после скобочек Stringa

// 6 - Тоже ошибка из-за типов данных

// 7 - Не сравнит, т.к разные типы данных

// 8 - нельзя применить к числу lenght

// 9 - str не задано и оно зачем-то приведенно к числу, будет ошибка

// 10 - Ошибка, т.к length надо за скобками Stringa

// 11 - тут все ок

// 12 - не сравнит из-за разных типов данных

// 13 - суммы не равны, т.к складывали строки и получится 123 и 033, они соответственно не равны

// Практика на условия if-else в JavaScript
console.log("Практика на условия if-else в JavaScript");
// 1
let month = 9;
if ((month >= 1 && month <= 2) || month == 12) {
  console.log("Зима");
} else if (month >= 3 && month <= 5) {
  console.log("Весна");
} else if (month >= 6 && month <= 8) {
  console.log("Лето");
} else if (month >= 9 && month <= 11) {
  console.log("Осень");
}
// 2
let str4 = "abcde";
if (str4[0] == "a") {
  console.log("да");
} else {
  console.log("нет");
}
// 3

let num10 = 12345;
let StringNum10 = String(num10);

if (StringNum10[0] == "1" || StringNum10[0] == "2" || StringNum10[0] == "3") {
  console.log("да");
} else {
  console.log("нет");
}
// 4
let num11 = 252;
let StringNum11 = String(num11);
let sums = 0;
for (let i = 0; i < StringNum11.length; i++) {
  sums += Number(StringNum11[i]);
}
console.log(sums);
// 5
let num12 = 123456;
let StringNum12 = String(num12);
let sums1 =
  Number(StringNum12[0]) + Number(StringNum12[1]) + Number(StringNum12[2]);
let sums2 =
  Number(StringNum12[3]) + Number(StringNum12[4]) + Number(StringNum12[5]);
if (sums1 == sums2) {
  console.log("да");
} else {
  console.log("нет");
}
