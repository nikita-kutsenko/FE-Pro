// Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.
// Например A = [23,1,2,52,5,34,23,6,246,436];
//   1. проверить все числа на простоту, и найденные простые числа сохранить в массив B.
//   2. найти максимальное число и минимальное число. 

// input n
n = +prompt('Input n: ', '');
while (isNaN(n) && (n <= 0)) {
    n = +prompt('n is not a number: ', '');
}

arrA = new Array(n);
for ( i = 0, maxA = 1000, minA = 1; i < arrA.length; i++ ) {
    arrA[i] = Math.floor( Math.random() * (maxA - minA) ) + minA;
}
console.log('Array A: ', arrA);

// 1
arrB = new Array();
for ( i = 0; i < arrA.length; i++) {
    isPrime = true;
    if ( arrA[i] <= 1)  {
        isPrime = !isPrime;
    } else {
        for ( j = 2; j < arrA[i] && isPrime; j++) {
            if ( !(arrA[i] % j) ) {
                isPrime = !isPrime;
            }
        }
        if ( isPrime ) {
            arrB[arrB.length] = arrA[i];
        }
    }
}
console.log('1. Array B, where all elements are prime: ', arrB);

// 2
// min 
for ( i = 0, minA = arrA[0]; i < arrA.length; i++) {
    if ( arrA[i] < minA ) {
        minA = arrA[i];
    }
}
console.log('Min A element: ', minA);

// max 
for ( i = 0, maxA = arrA[0]; i < arrA.length; i++) {
    if ( arrA[i] > maxA ) {
        maxA = arrA[i];
    }
}
console.log('Max A element: ', maxA);