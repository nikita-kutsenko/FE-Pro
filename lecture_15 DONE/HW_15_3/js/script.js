// Создать сеттер `model` (не связывать с задачей №2), который принимает объект и 
// выполняет `update` всех существующих свойств в текущем объекте.

// `obj = {x: 10, y: 20, p: 15};`
// obj.model = { x: { value: 33, operation: '*' }, 
//                 z: { value: 75, operation: '+' }, 
//                 p: { value: 4, operation: '%' } 
// };

// `console.log(obj); -> {x:330, y: 20, z: 75, p: 3}`


obj = { x: 10, y: 20, p: 15 };

function mathOperation(znak, X, Y) {
    if ( znak == '+') {
        return X + Y;
    } else if ( znak == '-') {
        return X - Y;
    } else if ( znak == '/') {
        return X / Y;
    } else if ( znak == '*') {
        return X * Y;
    } else if ( znak == '%') {
        return X % Y;
    } 
}

Object.defineProperty(obj, "model", {
    set(object) {
        for (key in object){
            if ( this.hasOwnProperty(key) ) {
                this[key] = mathOperation( object[key].operation, this[key], object[key].value)
                // this[key] += object[key].value;
            } else {
                this[key] = object[key].value;
            }
        }
    }
});

obj.model = { x: { value: 33, operation: '*' }, 
                z: { value: 75, operation: '+' }, 
                p: { value: 4, operation: '%' } 
};
console.log('obj :>> ', obj);