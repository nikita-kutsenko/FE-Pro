// Адаптировать функцию assignObjects() - из 2го задания - под неопределенное количество объектов. assignObjects(obj1, obj2, ....., objn);

objFirts1 = {
    x: 10, 
    y: 20
}
objFirts2 = {
    z: 30
}
objFirts3 = {
    a: 100,
    b: 500,
    c: 200
}
objFirts4 = {
    b: 1000,
    y: 200
}


assignObjects(objFirts1, objFirts2,objFirts3, objFirts4);

function assignObjects() {
    let newObj = {}

    for ( i = 0; i < arguments.length; i ++ ) {
        Object.assign(newObj, arguments[i]);
    }

    console.log(newObj);
}