// Для пустого объекта employee необходимо создать два свойства:

// 1. Первое свойство getUser будет возвращать строку this.getFirstName() + " " + this.getLastName(). 
// Если у целевого объекта нет полей firstName и lastName, то их необходимо запросить у 
// пользователя через prompt(). Свойство getUser нельзя удалить, но можно переопределить.

// 2. Второе свойство renderUser отрисует на странице в теге <ul> все поля целевого объекта. 
// Свойство renderUser нельзя удалить и переопределить.


// Далее, создаем объект User, который будет унаследовать все свойства объекта employee.
// Для объекта User вызываем методы getUser и renderUser. Метод renderUser должен вывести 
// на страницу поля объекта, которые не являются функциями.

// Домашку заливаем на github)

class Person {
    getFirstName() {
        let firstName = !this.firstName ? this.setFirstName() : this.firstName;
        return firstName;
    }

    setFirstName() {
        this.firstName = prompt('Input first name: ','');
    }

    getLastName() {
        let lastName = !this.lastName ? this.setLastName() : this.lastName;
        return lastName;
    }

    setLastName() {
        this.lastName = prompt('Input last name: ','');
    }
}

let employee = new Person();


// **********************
// !!! Вопрос в функции getUserFunction !!!
// **********************
// Не могу понять почему, но вызов getFirstName и getLastName в функции работает только тогда, 
// когда эти методы присвоены к переменным или выведенны в консоль. По этой причине 
// инициализирую их 
// **********************
function getUserFunction ( object ) {
    firstName = object.getFirstName();
    lastName = object.getLastName();
    return object.getFirstName() + ' ' + object.getLastName();
}

function renderUserFunction( object ) {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);

    for (key in object) {
        if( object.hasOwnProperty(key) ){
            console.log('object[key] :>> ', key);
            let li = document.createElement('li');
            li.innerText = object[key];

            ul.appendChild(li);
        }
    }
}


Object.defineProperty(employee, 'getUser', {
    value: getUserFunction(employee),
    writable: true, 
    configurable: false,
    enumerable: true
});

Object.defineProperty(employee, 'renderUser', {
    value: renderUserFunction(employee),
    writable: false, 
    configurable: false,
    enumerable: true
});

console.log('employee :>> ', employee);



let user = {
    age: function(){
        return 10+11;
    },
    country: 'Ukraine',
    city: 'Kiev',

};

user.__proto__ = employee;

Object.defineProperty(user, 'renderUser', {
    value: renderUserFunction_User(user),
    writable: false, 
    configurable: false
});

function renderUserFunction_User( object ) {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);

    for (key in object) {
        if( object.hasOwnProperty(key) && (typeof object[key] != "function") ) {
            let li = document.createElement('li');
            li.innerText = object[key];

            ul.appendChild(li);
        }
    }
}

user.getUser();
user.renderUser();