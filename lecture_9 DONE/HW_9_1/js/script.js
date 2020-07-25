// Создать функцию-конструктор SuperMath. Добавить к экземпляру метод - check(obj), 
// параметр obj которого имеет свойства X, Y, znak.

// Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. 
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия.

// Метод check должен подтвердить у пользователя хочет ли он произвести действие znak 
// c Х и У. Если - да, сделать математическое действие znak(которое описано в прототипе), 
// иначе - запросить ввод новых данных через метод input() с прототипа функции-конструктор SuperMath.

// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> считает



function SuperMath() {
}

obj = {
    X: 12,
    Y: 3,
    znak: '/',
}

SuperMath.prototype.input = function(obj) {
    alert('Input a new data');

    obj.X = +prompt('Input value of X: ', '2');
    obj.Y = +prompt('Input value of Y: ', '2');
    obj.znak = prompt('Input a sign of math operation for X and Y: ', '*');
}

SuperMath.prototype.inputCheck = function(obj) {
    // let checker = false;
    let message = '';
    // checker = Boolean(true);
    operations = ['+', '-', '/', '*', '%'];

    do {
        if (typeof obj.X != 'number' ||  isNaN(obj.X)) {
            // checker = false; 
            message = 'X must be a number.';
            
        } else if ( typeof obj.Y != 'number' ||  isNaN(obj.Y) ) {
            // checker = false;
            message = 'Y must be a number.';
        } else if (operations.indexOf(obj.znak) == -1 ) {
            // checker = false;
            message = 'You wrote incorrect math operation.';
        } else if (obj.znak == '/' && obj.Y === 0) {
            // checker = false;
            message = 'For making division, Y must not be equal to 0.';
        } 

        if ( message != '' ) {
            alert(message + 'Input data again:');
            this.input(obj);
        }

        
    } while (message != '')
}

SuperMath.prototype.mathOperation = function(X, Y, znak) {
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

SuperMath.prototype.check = function(obj) {
    this.inputCheck(obj);

    let answer = confirm('Do you want to do operation: ' + obj.X + obj.znak + obj.Y + ' ?');
    if (answer) {
        console.log(obj.X + obj.znak + obj.Y + ' = ' + this.mathOperation(obj.X, obj.Y, obj.znak ))
    } else {
        this.input(obj);
        this.check(obj);
    }
}


p = new SuperMath();
p.check(obj);