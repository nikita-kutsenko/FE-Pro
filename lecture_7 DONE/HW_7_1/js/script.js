// Создать объект с такой структурой: obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } } 
// Написать функцию convert(obj), которая получает аргументом obj. 
// Функция должна вернуть новый объект:

// newObj = {
//     x: 20,
//     y: 20,
//     z: 30,
//     k: 23,
//     p: 13
// }

obj = { 
    x: 10, 
    y: 20, 
    inner: { 
        x: 20, 
        z: 30 
    }, 
    foo2: { 
        k: 23, 
        p: 13 
    } 
}

function convert(obj) {
    let newObj = {}

    for (let key in obj) {
        if (typeof obj[key] === "object") {
            for (let key1 in obj[key]) {
                newObj[key1] = obj[key][key1];
            }
        } else {
            newObj[key] = obj[key];
        }
    }

    console.log(newObj);
}

convert(obj);