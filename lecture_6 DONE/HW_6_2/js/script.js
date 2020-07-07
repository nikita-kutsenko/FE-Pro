// Дано массив строк array. В каждой необходимо найти позицию совпадения match.
// Все совпадения сохранить в строку через разделитель.
// match ="hello";
// array = ["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"];

// результат: "4, 0, 9, 4"

function findWord(array) {
    indexArray = new Array;
    for ( i = 0;  i < array.length; i ++) {
        if (array[i].indexOf('hello') != -1) {
            indexArray[indexArray.length] = array[i].indexOf('hello');
        }
    }
    return console.log(indexArray.join(', '));
}

array = ["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"];
findWord(array);