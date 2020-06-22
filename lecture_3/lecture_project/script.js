// hw 2.1
// Ввести с клавиатуры 2 числа `a` и `b` (где `a <<< b`). Запустить цикл перебора от `a` до `b`. Вывести в консоль квадраты чётных чисел.
alert('HW #2_1');
console.log('HW #2_1');

// input a 
do {
    a1 = +prompt('Input a:', ''); 
    if (a1 <= 0 || a1 == NaN) {
        alert('wrong a');
    }
} while (a1 <= 0 || a1 == NaN)
console.log('a = ', a1);

// input b 
do {
    b1 = +prompt('Input b:', '');
    if (b1 <= 0 || b1 == NaN) {
        alert('wrong b');
    } else if (b1 <= a1) {
        alert('b must be bigger than a!');
    }
} while (b1 <= 0 || b1 == NaN || b1 <= a1)
console.log('b = ', b1);

// new array 
while (a1 <= b1) {
    if ((a1 % 2) == 0) {
        console.log(a1, 'squared is', (a1 ** 2));
    }
    a1++;
}
console.log('----------------------');




// #2_2 (ВОПРОС!!!)
// 1. Заставить пользователя ввести с клавиатуры число.
// 2. Проверить число на простоту.
alert('HW #2_2');
console.log('HW #2_2');

// input a 
do {
    a2 = +prompt('Input a:', '');
    if (a2 <= 1 || a2 == NaN) {
        alert('wrong a');
    }
} while (a2 <= 1 || a2 == NaN)
console.log('a = ', a2);

text2 = '';
for (i = 2; i < a2; i++) {
    if (a2 % i == 0) {
        text2 = ' is a composite number!';
        // alert(a2 + ' is a composite number!');
        // console.log(a2, ' is a composite number!');
        break;
    } else {
        text2 = ' is a prime number!';
    }
}
alert(a2 + text2);
console.log(a2, text2);
console.log('----------------------');




// #2_3
// Посчитать сумму простых чисел от 0 до 250.
alert('HW #2_3');
console.log('HW #2_3');

sum3 = 0;
nextPrime3: for (i = 2; i <= 250; i++) {
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            // sum3 = sum3 + i;
            // console.log(i, 'sum is ', sum3);  
            continue nextPrime3;
        } 
    }
    sum3 = sum3 + i;
    console.log(i, 'sum is ', sum3);
}
console.log('total sum is: ', sum3);
console.log('----------------------');




// #2_4
// Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры
alert('HW #2_4');
console.log('HW #2_4');

n4 = +prompt('Input n: ', '');
console.log('n = ', n4);

for (i = 3, a = 1, b = 1; i <= n4; ++i) {
    c = a + b;
    a = b;
    b = c;
    console.log(i, ' => ', b);
}
console.log('----------------------');




// #2_5
// Ввести с клавиатуры a и b, где а меньше b. Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры).
// Посчитать сумму факториалов* чисел которые попадаются во время перебора.
alert('HW #2_5');
console.log('HW #2_5');

// input data 
do {
    a5 = +prompt('Input a: ', '');
    console.log('a = ', a5);
    b5 = +prompt('Input b, bigger than a: ', '');
    console.log('b = ', b5);
    if (a5 >= b5) {
        alert('a must be smaller than b!');
    }
} while (a5 >= b5)
h5 = +prompt('Input h: ', '');
console.log('h = ', h5);

// function 
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
sum5 = 0;

// sum calculation
while (a5 <= b5) {
    sum5 = sum5 + factorial(a5);
    console.log(a5 , '+ sum = ', sum5);
    a5 = a5 + h5;
}
console.log('----------------------');



// #2_6
// Выведите столбец четных чисел в промежутке от 0 до 100. (в document в виде таблицы)
alert('HW #2_6');
console.log('HW #2_6');

tr = '';
for (i = 0; i <= 100; i++) {
    if (i != 0 && i % 2 == 0) {
        tr = tr + '<tr><td>' + i + '</td></tr>';
    }
}

table = '<table>' + tr + '</table>';
document.write(table);
console.log('----------------------');