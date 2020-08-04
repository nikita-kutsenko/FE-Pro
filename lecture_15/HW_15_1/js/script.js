// Добавить всем массивам геттер – render, который будет выводить массив в документ, 
// в виде таблицы (номер ячейки и значение ячейки).

let table = document.createElement('table'),
    thead = document.createElement('thead'),
    trHead = document.createElement('tr'),
    th1 = document.createElement('th'),
    th2 = document.createElement('th');

    tbody = document.createElement('tbody');

th1.innerText = 'Number';
th2.innerText = 'Key';

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(trHead);
trHead.appendChild(th1);
trHead.appendChild(th2);
table.appendChild(tbody);


Object.defineProperty(Array.prototype, 'render', {
    get() {
        console.log('this :>> ', this);
        for (let key in this) {
            let tr = document.createElement('tr'),
                td1 = document.createElement('td'),
                td2 = document.createElement('td');

            td1.innerText = key;
            td2.innerText = this[key];
    
            tbody.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
        }
    }
});

let arr1 = ['A', 'B', 'C', 'D'];
console.log('arr1.render :>> ', arr1.render);