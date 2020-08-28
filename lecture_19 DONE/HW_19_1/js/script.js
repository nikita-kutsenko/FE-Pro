// Сделать 3 асинхронные операции (симулируем при помощью функции getPromise(), внутри которой находится 
// setTimeout(resolve(),timer)). В каждом промисе (getPromise) возвращается число от 0 до 100.

// Создать обертку runAfter(), которая получает в качестве аргумента – 3 функции в массиве, которые 
// выполнятся после окончания всех 3-х асинхронных операций.

// Например:
// function afterFirstPromise(){};
// function afterSecondPromise(){};
// function afterThirdPromise(){};

// function runAfter([afterFirstPromise,afterSecondPromise,afterThirdPromise]){}



// number generation  
function getNumber() {
    return Math.floor(Math.random() * Math.floor(100));
}

async function getPromise(timer) {
   await new Promise ( resolve => setTimeout( resolve, timer) )
                
   return getNumber();
}

function afterFirstPromise(timer) {
    getPromise(timer).then(result => console.log(result));
}

// generator 
function* name(timer) {
    while (true) {
        timer += 500;
        yield getPromise(timer).then(result => console.log(result));
    }
}

// creating from generator 
const gen = name(1000);

function runAfter([afterFirstPromise,afterSecondPromise,afterThirdPromise]) {
    Promise.all([afterFirstPromise,afterSecondPromise,afterThirdPromise]);
}

// run
runAfter( [gen.next().value, gen.next().value, gen.next().value] );