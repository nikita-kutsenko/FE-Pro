// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта и возвращает новый, 
// который состоит из свойств обоих объектов (склеить). Если свойство повторяется, то взять значение второго объекта

// assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }

// assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }

objFirts1 = {
    x: 10, 
    y: 20
}
objFirts2 = {
    z: 30
}

objSecond1 = {
    x: 10
}
objSecond2 = {
    x: 20, 
    y: 30
}

assignObjects(objFirts1, objFirts2);
assignObjects(objSecond1, objSecond2);

function assignObjects(obj1, obj2) {
    let newObj = {}

    Object.assign(newObj, obj1, obj2);

    console.log(newObj);
}












// obj = { 
//     x: 10, 
//     y: 20, 
//     inner: { 
//         x: 20, 
//         z: 30 
//     }, 
//     foo2: { 
//         k: 23, 
//         p: 13 
//     } 
// }

// function convert(obj) {
//     let newObj = {}

//     for (let key in obj) {
//         if (typeof obj[key] === "object") {
//             for (let key1 in obj[key]) {
//                 newObj[key1] = obj[key][key1];
//             }
//         } else {
//             newObj[key] = obj[key];
//         }
//     }

//     console.log(newObj);
// }

// convert(obj);