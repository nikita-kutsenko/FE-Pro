// Используя Promise написать код, который сформирует 2 последовательных запроса за различными 
// файлами json (data.json, data2.json). В файлах лежат массивы подобные по структуре. Склеить
// 2 массива и вывести результат в консоль.

let getFile = (method, file) => {
    return new Promise ( ( resolve, reject ) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, file, true);
        xhr.send();

        xhr.addEventListener('readystatechange', () => {
            if ( ( xhr.readyState === 4 ) && ( xhr.status <= 400 ) ) {
                resolve( JSON.parse( xhr.responseText ) );
            }
        });
    });
};

getFile('GET', './data.json')
    .then(
        ( firstData ) => {
            getFile('GET', './data2.json')
                .then(
                    ( secondData ) => {
                        getNewArray(firstData, secondData);
                        console.log('Joined data and data2 :>> ', firstData);
                    }
                )
        }
    )
    .catch(
        () => {
            console.log('empty data');
        }
    )

    
let getNewArray = (arr1, arr2) => {
    for ( key in arr2 ) {
        if ( arr1[key] ) {
            arr1[key] = arr1[key].concat(arr2[key]);
        } else {
            arr1[key] = arr2[key];
        }
    }
    return arr1;
}