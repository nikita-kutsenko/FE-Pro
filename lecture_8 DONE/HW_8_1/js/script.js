// Имеем функцию getPerson(name, from, to) которая возвращает объект {name: name, age: Math.random()} 
// Создать массив из 5 таких объектов. Найти средний возраст и самого старшего человека. 
// Вынести людей с одинаковым именем в отдельный массив.



// ex 1
function getPerson(name, from, to) {
    this.name = name,
    this.age = calcAge(from, to)
}

function calcAge(from, to) {
    return Math.floor( Math.random() * ( to - from ) ) + from;
}



// ex 2 
// Cделал на выбор двумя методами:
//      первый (2.1.) - прописываем в коде свойства обьектов
//      второй (2.2.) - своими руками прописываем сколько пользователей будет, и прописываем свойства для каждого

// 2.1. 
person1 = new getPerson('Andrey', 20, 40);
person2 = new getPerson('Nick', 15, 23);
person3 = new getPerson('Nick', 35, 50);
person4 = new getPerson('Nick', 19, 24);
person5 = new getPerson('Dasha', 16, 19);

personsArray = new Array();
personsArray = personsArray.concat(person1,person2,person3,person4,person5);
// 2.1. END


// // 2.2. 
// personsArray = createArrayPersonsByInput();
// // 2.2. END


console.log('Массив людей:', personsArray);

midAge = getMiddleAge(personsArray);
console.log('Средний возраст', midAge);

oldPerson = getOldPerson(personsArray);
console.log('Самый взрослый человек: ', oldPerson['name'], ',', oldPerson['age']);



// 3 
copyPersonsArray = personsArray.slice();
// console.log('Массив с именами - копиями:', copyPersonsArray);

theSameNames = getTheSameNames(copyPersonsArray);
console.log('Массив с одинаковыми именами:', theSameNames);



// functions

// 2.2. 
// create array 
function createArrayPersonsByInput() {
    array = new Array();
    maxNumber = getNumberOfPersons();

    for ( i = 0; i < maxNumber; i++) {
        array[i] = createPerson();
    }

    return array;
}
function getNumberOfPersons() {
    n = +prompt('Input the number of persons', '');
    return n;
}

// create each person 
function createPerson() {
    name = getName();
    age = getAge();
    from = age[0];
    to = age[1];

    person = new getPerson(name, from, to);
    console.log(person);
    
    return person;
}
function getName() {
    do {
        name = prompt('Input name', '');
    } while (typeof name != "string")

    return name;
}
function getAge() {
    do {
        from = +prompt('Input age from', '');
        to = +prompt('Input age to', '');
    } while ( typeof from != "number" || typeof to != "number" || from >= to )

    return [from, to];
}
// 2.2. END

// middle age 
function getMiddleAge(array) {
    ageSum = 0;
    for ( i = 0; i < array.length; i++ ) {
        ageSum = ageSum + array[i]['age'];
    }

    midAge = Math.floor( ageSum / array.length );
    return midAge;
}

// oldest person 
function getOldPerson(array) {
    oldPerson = array[0];

    for ( i = 1; i < array.length; i++ ) {
        if (oldPerson['age'] < array[i]['age']) {
            oldPerson = array[i];
        }
    }

    return oldPerson;
}



// 3
function getTheSameNames(array) {
    theSameNamesArray = new Array();
    for ( i = 0; i < array.length; i++ ) {
        debugger;
        for ( j = i + 1, temp = 0; j < array.length; j++ ) {
            debugger;
            if ( array[i]['name'] == array[j]['name'] && !temp++) {
                debugger;
                theSameNamesArray.push(array[i], array[j]);
                array.splice(j, 1);
                // console.log('j',j);
                j--;
            } else if ( array[i]['name'] == array[j]['name'] ) {
                theSameNamesArray.push(array[j]);
                array.splice(j, 1);
                // console.log('j',j);
                // j--;
            }
            // console.log(theSameNamesArray);
        }
        // console.log('i',i);
    }

    return theSameNamesArray;
}