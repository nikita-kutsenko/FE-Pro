// Дана функция:

// function f (a, b, c) { 
//   function sum (a, b) { 
//     return a + b; 
//   } 
// }
// Перепишите её следующим образом:

// 1. Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
// 2. Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum.
// 3. Функция f должны возвращать результат функции аргумента c, если он есть, либо результат функции sum.

function f (a = 2, b = 3, c) { 
    function sum (a, b) { 
        return a + b; 
    } 
    if ( typeof c === 'function') {
        result = 'Выполнение заданой функции ' + c(a,b);
    } else {
        result = 'Выполнение функции sum ' + sum(a,b);
    }
    console.log(result);
}

function multiply(a, b) {
    return Math.pow(a ,b);
}

f(3,5,multiply);
f(3,5,4);