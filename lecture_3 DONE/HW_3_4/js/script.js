// Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1.
// Нельзя использовать стандартный метод reverse(). 
// Постарайтесь не использовать дополнительный массив. Оригинальный массив А сохранять не нужно (т.е. он должен перевернуться). 

// input n
n = +prompt('Input n: ', '');
while (isNaN(n) && (n <= 0)) {
    n = +prompt('n is not a number: ', '');
}

arrA = new Array(n);
for ( i = 0, maxA = 200, minA = 1; i < arrA.length; i++ ) {
    arrA[i] = Math.floor( Math.random() * (maxA - minA) ) + minA;
}
console.log('Array A: ', arrA);

// 3_4
for ( i = (arrA.length - 1); i >= 0; i-- ) {
    arrA[arrA.length] = arrA[i];
    arrA.splice(i, 1);
}
console.log('Array A: ', arrA);