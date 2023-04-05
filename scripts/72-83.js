// Операторы больше и меньше в JavaScript
console.log("Операторы больше и меньше в JavaScript");
// 1
let test = 5;
if (test > 10) {
  console.log("test больше 10");
} else {
  console.log("test меньше 10");
}
// 2
if (test < 10) {
  console.log("test меньше 10");
} else {
  console.log("test больше 10");
}
// 3
if (test >= 10) {
  console.log("test больше или равно 10");
} else {
  console.log("test меньше 10");
}
// 4
if (test <= 10) {
  console.log("test меньше или равно 10");
} else {
  console.log("test больше 10");
}

// Проверка на равенство в JavaScript
console.log("Проверка на равенство в JavaScript");
if (test == 10) {
  console.log("test равно 10");
} else {
  console.log("test не равно 10");
}

// Проверка на неравенство в JavaScript
console.log("Проверка на неравенство в JavaScript");
if (test != 10) {
  console.log("test не равно 10");
} else {
  console.log("test равно 10");
}

// Сравнение переменных в JavaScript
console.log("Сравнение переменных в JavaScript");
// 1
let test1 = 5;
let test2 = 4;
if (test1 > test2) {
  console.log("test1 больше test2");
} else {
  console.log("test1 меньше test2");
}
// 2
if (test1 == test2) {
  console.log("test1 равно test2");
} else {
  console.log("test1 не равно test2");
}

// Равенство строк в JavaScript
console.log("Равенство строк в JavaScript");
let test3 = "qwe";
if (test3 == "qwe") {
  console.log('test3 равно "qwe"');
}

// Равенство строк и чисел в JavaScript
console.log("Равенство строк и чисел в JavaScript");
let test4 = "123";
let test5 = 123;
if (test4 == test5) {
  console.log("test4 равно test5");
} else {
  console.log("test4 не равно test5");
}

// Логическое И в JavaScript
console.log("Логическое И в JavaScript");
// 1
let num = 4;
if (num > 0 && num < 5) {
  console.log("num больше нуля и меньше 5");
} else {
  console.log("num меньше нуля и меньше 5");
}
// 2
if (num >= 10 && num <= 20) {
  console.log("num больше или равно 10 и меньше или равно 20");
} else {
  console.log("num меньше 10 и больше 20");
}
// 3
let num1 = 1;
let num2;
3;
if (num1 <= 1 && num2 >= 3) {
  console.log("num1 равно или меньше 1 и num2 больше или равно 3");
} else {
  console.log("num1 больше 1 и num2 меньше 3");
}

// Приоритет логических операторов в JavaScript
console.log("Приоритет логических операторов в JavaScript");
if (num == 0 || (num > 1 && num < 5)) { // проверяет num равно нулю или num больше 1 и num меньше 5
  console.log("+++"); // вывод если верно
} else { // вывод если ложно
  console.log("---");
}

