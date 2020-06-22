// Элементы массива между min -- max записать в массив B. Массив взять с Задания #3_1. 

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

// 3_1_1
// arrB = new Array();
// for ( i = 0; i < arrA.length; i++) {
//     isPrime = true;
//     if ( arrA[i] <= 1)  {
//         isPrime = !isPrime;
//     } else {
//         for ( j = 2; j < arrA[i] && isPrime; j++) {
//             if ( !(arrA[i] % j) ) {
//                 isPrime = !isPrime;
//             }
//         }
//         if ( isPrime ) {
//             arrB[arrB.length] = arrA[i];
//         }
//     }
// }
// console.log('1. Array B, where all elements are prime: ', arrB);

// 3_1
// min 
for ( i = 0, minA = arrA[0], indexMinA = 0; i < arrA.length; i++) {
    if ( arrA[i] < minA ) {
        minA = arrA[i];
        indexMinA = i;
    }
}
console.log('Min A element: ', minA);

// max 
for ( i = 0, maxA = arrA[0], indexMaxA = 0; i < arrA.length; i++) {
    if ( arrA[i] > maxA ) {
        maxA = arrA[i];
        indexMaxA = i;
    }
}
console.log('Max A element: ', maxA);

// 3_2
arrB = new Array();
arrB = arrA.slice(indexMinA, indexMaxA);
console.log('Array B, where all elements are between min and max of array A: ', arrB);

