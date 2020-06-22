// 1) В массиве заполненном рандомными значениями произвести такую замену:
    // 1 элемент поменять с 2
    // 3 элемент поменять с 4
    // 5 элемент поменять с 6
    // и тд
// Если массив непарный - последний элемент не трогать.
    // было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5

// 2) В массиве заполненном рандомными числами:
//     * Вывести элементы массива, которые больше среднего арифметического
//     * Вывести в консоль индексы элементов массива, значение которых лежит в указанном пределе. Предел вводится с клавиатуры как A, B
//     * Удалить повторяющиеся элементы из массив, оставить массив уникальных значений



// 1
console.log('1');

arrA = randomArray(+prompt('Input length A array:',''));
console.log('Array A: ', arrA);

arrA = changeArray(arrA);
console.log('Changed array A: ', arrA);

function randomArray(arrayLength, min = 1, max = 10) {
    array = new Array(arrayLength);

    for ( i = 0; i < arrayLength; i++ ) {
        array[i] = Math.floor(Math.random() * ( max - min ) ) + min;
    }

    return array;
}

function changeArray(array) {

    for ( i = 0; i < array.length; i++ ) {
        temp = array[i];
        array.splice( i, 1 );
        i++;
        array.splice ( i, 0 , temp);
    }

    return array;
}
console.log('-----------------------');



// 2 
console.log('2_1');
arrB = randomArray(+prompt('Input length B array:',''));
console.log('Array B: ', arrB);

// 2_1
meanArrB = arrayMeanElements(arrB); 
console.log('Elements of B array, that are more than mean:', meanArrB);

function arrayMeanElements(array) {
    arrayNew = new Array();

    for (  mean = arrayMean(array), i = 0; i < array.length; i++ ) {
        if ( array[i] > mean ) {
            arrayNew[arrayNew.length] = array[i];
        }
    }

    return arrayNew;
}

function arrayMean(array) {

    for ( mean = 0, sum = 0, i = 0; i < array.length; i++ ) {
        sum = sum + array[i];
        mean = sum / array.length;
    }

    console.log('Mean is:', mean);
    return mean;
}


// 2_2
console.log('-----------------------');
console.log('2_2');
limFrom = +prompt('Input index B array to start:','');
limTo = +prompt('Input index B array to end:','');

// indexArrB = arrB.slice(limFrom,lastLimTo);
indexArrB = arrayIndex(arrB, limFrom,limTo);
console.log('Elements of B array, that are from ', limFrom, 'to', limTo, ':', indexArrB);
console.log('Array B: ', arrB);

function arrayIndex(array, start, end) {
    arrayNew = new Array();

    for ( i = start; i <= end; i ++ ) {
        arrayNew[arrayNew.length] = array[i];
    }

    return arrayNew;
}


// 2_3
console.log('-----------------------');
console.log('2_3');

uniqueArrB = uniqueArray(arrB);
console.log('B array, where all unique elements:', uniqueArrB);

function uniqueArray(array) {

    for ( i = 0; i < array.length - 1; i++ ) {
        for ( j = i + 1; j < array.length; j ++ ) {
            if ( array[i] == array[j] ) {
                array.splice(j--,1);
            }
        }
    }

    return array;
}