/*1) Дан код:*/
let a = 1,
    b = 1,
    c, d;

 c = ++a;      alert(c); //  2 - префиксная форма. инкрементирование производится сразу и возвращается уже обновленное значение
 d = b++;      alert(d); //  1 - постфиксная форма. Сначала возвращается значение, потом выполняется инкрементирование.
 c = (2+ ++a); alert(c); //  2 + (a = 2 + 1) = 2 + 3 = 5;
 d = (2+ b++); alert(d); //  2 + (b = 2) = 2 + 2 = 4;

alert(a); // 3 - изначально а=1, после дважды выполнялось инкрементирование. Префиксные формы (пункты 1 и 3).
alert(b); // 3 - изначально b=1, после выполнилось инкрементирование. Постфиксные формы (пункты 2 и 4).

// 2) Чему будет равен x в примере ниже?

let an = 2;
let x = 1 + (an *= 2); // x = 1 + (2 * 2) = 1 + 4 = 5
console.log(x);

// 3) Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// * если a и b положительные, вывести их разность;
// * если а и b отрицательные, вывести их произведение;
// * если а и b разных знаков, вывести их сумму;
// ноль можно считать положительным числом.

let aa  = 5,
    bb = 3;

if(aa > 0 && bb > 0){
 console.log(aa - bb);
} else if(aa < 0 && bb<0) {
 console.log(aa * bb);
} else {console.log(aa + bb);}

// 4) Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.

let number = 7;
switch (number){
     case 1:
     console.log(1);
     case 2:
     console.log(2);
     case 3:
     console.log(3);
     case 4:
     console.log(4);
     case 5:
     console.log(5);
     case 6:
     console.log(6);
     case 7:
     console.log(7);
     case 8:
     console.log(8);
     case 9:
     console.log(9);
     case 10:
     console.log(10);
     case 11:
     console.log(11);
     case 12:
     console.log(12);
     case 13:
     console.log(13);
     case 14:
     console.log(14);
     case 15:
     console.log(15);
}

// 5) Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

const sum = (a, b) => {
 return a+b;
};

const sub = (a,b) => {
 return a - b;
};

const multiply = (a,b) => {
 return a*b;
};

const divide = (a, b) => {
 return a / b;
};

//6) Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

const mathOperation = (arg1,arg2, operation) => {
 let result = 0;
  if(arg1 > 0 && arg2 > 0){
      switch (operation){
          case '+':
              result = sum(arg1,arg2);
              break;
          case '-':
              result = sub(arg1,arg2);
              break;
          case '*':
              result = multiply(arg1,arg2);
              break;
          case '/':
              result = divide(arg1,arg2);
              break;
      }
  }
  return result;
};

//8) * С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.

let result = 1;
const power = (val, pow) => {
    if(pow === 0) return result;
    if(pow>0){
        result *= val;
    }
    return power(val, pow-1);
};

console.log(power(3,3));