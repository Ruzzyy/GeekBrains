// 1) С помощью цикла while вывести все простые числа в промежутке от 0 до 100
console.log('Задание 1');
let i = 1;
let max = 100;

const primeNumber = n => {
    if(n<2) return false;

    for(let j = 2; j<n; j++){
        if(n%j == 0) return false;
    }
    return true;
};

while(i<max){
    if(primeNumber(i)){
        console.log(i + ' - простое число');
    }
    i += 1;
}

// 2) С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, чтобы результат выглядел так:
//     0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
console.log('Задание 2');

let value = 0;
let num = prompt('введите число');

 do{
    if(value==0){
        console.log(value + ' - это ноль');
    }else if(value%2 == 0){
        console.log(value + ' - четное число');
    } else {console.log(value + ' - нечетное число');}
    value += 1;
 } while(value <= num);

// 3) * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так:
//
//     for(…){// здесь пусто}
console.log('Задание 3');

for(let i = 0; i<10; console.log(i++)) {}

//4) * Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//
// x
// xx
// xxx
// xxxx
// xxxxx
console.log('Задание 4');
let str = '';
let round = 20;
for(let i=0; i < round; i++){
    str += 'x';
    console.log(str);
}