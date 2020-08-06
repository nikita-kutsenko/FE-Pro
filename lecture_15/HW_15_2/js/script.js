// У объекта data создать свойство геттер `model` и сеттер `model`. 
// Которое обрабатывает  данные после двух обращений.


// При первом обращении сохраняется строка. Например: `data.model = 'Hello, how, are you?'`

// При втором обращении к сеттеру происходит нарезание строки по переданному 
// символу и сохранение результата в свойство str. 
// Например: `data.model = ","`

// `console.log(data.str) -> ['Hello', ' how', ' are you?']`


// ----------------------


// Геттер `data.model` возвращает символы, которые были удалены (при втором вызове сеттера) и их количество в виде объекта.

// `console.log(data.model); -> { symbol: ',', count: 2 }`

let data = {};


Object.defineProperty(data, 'model', {
    get() {
        return {
            symbol: this.symbol,
            count:  this.count,
        }
    },
    set(input) {
        if (!this.text) {
            this.text = input;
        } else if (!this.symbol) {
            this.symbol = input;
            this.str = this.text.split(this.symbol);
            this.count = this.str.length-1;
        }
    }
});

data.model = "Hello, how, are you?";
data.model = ',';
console.log(data.model);
