// В массиве A поменять местами min и max. Массив взять c Задания #3_2. 

// input n
n = +prompt('Input n: ', '');
while (isNaN(n) && (n <= 0)) {
    n = +prompt('n is not a number: ', '');
}

arrA = new Array(n);
indexMinA = 0;
indexMaxA = 0;
// do {
    for ( i = 0, maxA = 1000, minA = 1; i < arrA.length; i++ ) {
        arrA[i] = Math.floor( Math.random() * (maxA - minA) ) + minA;
    }

    // 3_1
    // min 
    for ( i = 0, minA = arrA[0]; i < arrA.length; i++) {
        if ( arrA[i] < minA ) {
            minA = arrA[i];
            indexMinA = i;
        }
    }

    // max 
    for ( i = 0, maxA = arrA[0]; i < arrA.length; i++) {
        if ( arrA[i] > maxA ) {
            maxA = arrA[i];
            indexMaxA = i;
        }
    }
// } while (indexMinA > indexMaxA)

console.log('Array A: ', arrA);
console.log('Min A element, index: ', minA, indexMinA);
console.log('Max A element, index: ', maxA, indexMaxA);

// 3_2
arrB = new Array();
// arrB = arrA.slice(indexMinA, indexMaxA);
if ( indexMinA < indexMaxA ) {
    arrB = arrA.slice(indexMinA, indexMaxA);
} else {
    arrB = arrA.slice(indexMaxA, indexMinA);
}
console.log('Array B, where all elements are between min and max of array A: ', arrB);

// 3_3
arrA.splice(indexMinA, 1, maxA);
console.log('New Max A element, index: ', arrA[indexMinA] ,indexMinA);

arrA.splice(indexMaxA, 1, minA);
console.log('Max Min A element, index: ', arrA[indexMaxA], indexMaxA);

// new array B
if ( indexMinA < indexMaxA ) {
    arrB = arrA.slice(indexMinA, indexMaxA);
} else {
    arrB = arrA.slice(indexMaxA, indexMinA);
}
// arrB = arrA.slice(indexMinA, indexMaxA);
console.log('New array B, where all elements are between new min and new max of array A: ', arrB);