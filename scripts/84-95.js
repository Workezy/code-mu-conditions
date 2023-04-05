// Инвертирование логических выражений в JavaScript
let num3 = 2;
let num4 = 5;
console.log("Инвертирование логических выражений в JavaScript");
if (!(num3 >= 0 || num4 <= 10)) {
  console.log("+++");
} else {
  console.log("---");
}

// Условия с булевыми значениями в JavaScript
console.log("Условия с булевыми значениями в JavaScript");
// 1
let test6 = true;
if (test6 === true) {
  console.log("test6 == true");
} else {
  console.log("test6 != true");
}
// 2
let test7 = false;
if (test7 === false) {
  console.log("test7 == false");
} else {
  console.log("test7 != false");
}

// Сокращенная форма проверки на истину в JavaScript
console.log("Сокращенная форма проверки на истину в JavaScript");
if (test6) {
  console.log("test6 == true");
} else {
  console.log("test6 != true");
}

// Сокращенная форма проверки на ложь в JavaScript
console.log("Сокращенная форма проверки на ложь в JavaScript");
// 1
if (!test6) {
  console.log("test6 == false");
} else {
  console.log("test6 == true");
}
// 2
if (!test6) {
  console.log("test6 == false");
} else {
  console.log("test6 == true");
}
// 3
if (test6) {
  console.log("test6 == true");
} else {
  console.log("test6 == false");
}

// Сложные условия в сокращенной форме в JavaScript
console.log("Сложные условия в сокращенной форме в JavaScript");
// 1
let test8 = true;
let test9 = true;
let test10 = true;
if (test8 && test9) {
  console.log("+++");
} else {
  console.log("---");
}
// 2
if (test8 && !test9) {
  console.log("+++");
} else {
  console.log("---");
}
// 3
if (!test8 && !test9) {
  console.log("+++");
} else {
  console.log("---");
}
// 4
if (test8 && test2) {
  console.log("+++");
} else {
  console.log("---");
}
// 5
if (test8 && test9 && test10) {
  console.log("+++");
} else {
  console.log("---");
}
// 6
if (test8 || (test9 && test3)) {
  console.log("+++");
} else {
  console.log("---");
}
// 7
if (test8 || (!test9 && !test10)) {
  console.log("+++");
} else {
  console.log("---");
}

// Необязательность конструкции else в JavaScript
console.log("Необязательность конструкции else в JavaScript");
let test11 = 10;
if(test11 == 10) {
    console.log('yes');
}

// Необязательность фигурных скобок в JavaScript
console.log("Необязательность фигурных скобок в JavaScript");
// 1
if(test11 > 0) console.log('+++'); else console.log('---');
// 2
if(test11 > 0) console.log('+++');

// Конструкция else if в JavaScript
console.log("Конструкция else if в JavaScript");
// 1 & 2
let day = 12;
if(day > 0 && day <= 10) {
    console.log('1');
} else if(day > 10 && day <= 20) {
    console.log('2');
} else if(day > 20 && day <= 31) {
    console.log('3');
} else if(typeof(day) != 'number' || day > 31) {
    console.log('В day находится не число или число больше 31');
}

// Вложенные конструкции if-else в JavaScript
let num5 = 12;
let digit = 0;
let sum = 0;
if(num5 >= 10 && num5 <= 99) {
    digit = num5 % 10;
    num5 = Math.floor(num5 / 10);
    sum = digit + num5;
    if(sum <= 9) {
        console.log('Сумма цифр однозначна');
    } else {
        console.log('Сумма цифр двузначна');
    }
    
}
