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
    debugger;
    function sum (a, b) { 
        return a + b;  
    } 
    debugger;
    if ( typeof c === 'function') {
        debugger;
        return c(a,b);
        debugger;
    }
    debugger;
}

function multiply (a , b) {
    return a * b;
}
x = 3;
y = 5;
z = multiply(1,2);
result = f(x, y, z);
console.log('result', result);