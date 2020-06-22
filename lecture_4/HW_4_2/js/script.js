// Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает суммы 
// всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая – должен вернутся функцией.
// Пример:
// a = [1,2,3, 'hello',4,5] => summA = 15
// b = [1,2,3, true, 4, undefined, 6] => summB = 16
// if(summA < summB) => return b


arrA = [1,2,3,4,'word',5,6,'smth',7];
console.log('Array A:', arrA);
arrB = [1,'A','B',2,3,'C','D',4,5];
console.log('Array B:', arrB);

result = arraySum(arrA,arrB);
console.log('Array:', result);

function arraySum(arrayFirst, arraySecond) {
    sumFirst = 0;
    sumSecond = 0;

    for ( i = 0; i < arrayFirst.length; i++ ) {
        if ( typeof arrayFirst[i] === 'number' ) {
            sumFirst += arrayFirst[i];
        }
    }

    for ( i = 0; i < arraySecond.length; i++ ) {
        if ( typeof arraySecond[i] === 'number' ) {
            sumSecond += arraySecond[i];
        }
    }

    if (sumFirst > sumSecond) {
        return arrayFirst;
    } else  return arraySecond;
}