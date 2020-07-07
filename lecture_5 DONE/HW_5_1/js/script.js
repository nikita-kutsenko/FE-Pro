// Написать функцию getMaxs(args), где args – любое количество массивов. Функция должна вернуть 
// максимумы всех переданных массивов в виде строки, через разделитель '; '.


a = randomArray(5);
b = randomArray(5);
c = randomArray(5);
d = randomArray(5);
e = randomArray(5);

console.log( a,b,c,d,e);
console.log( 'All maxs:', getMaxs(a,b,c,d,e) );

function randomArray(arrayLength, min = 1, max = 50) {
    array = new Array(arrayLength);

    for ( i = 0; i < arrayLength; i++ ) {
        array[i] = Math.floor(Math.random() * ( max - min ) ) + min;
    }

    return array;
}

function getMaxs() {
    var resultMaxs = [];
    var array = [];
    var maxElement = [];

    for ( i = 0; i < arguments.length; i++) {
        console.log('arguments' , i , ':', arguments[i]);
        array = arguments[i];
        for ( j = 0, maxElement[i] = array[0]; j < array.length; j++) {
            console.log('array' , j , ':', array[j]);
            if ( array[j] > maxElement[i] ) {
                maxElement[i] = array[j];
            }
        }
        console.log('max :', maxElement[i]);
        resultMaxs[i] = maxElement[i];
    }
    resultMaxs = resultMaxs.join(';');

    return resultMaxs;
}