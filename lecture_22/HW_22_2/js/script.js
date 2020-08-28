// Дополнить приложение которое базируется на задании #22_1.
// У нас есть неограниченное количество списков. Хранятся они в виде вложенных массивов -

// allLists: [ [1,2,3], [4,5,6], [7,8,9], [10,11,12] ]

// Кнопка transfer работает по следующему принципу: возле кнопки есть чекбокс, при включенном 
// чекбоксе последняя задача из текущего списка переходит в следующий. 
// При выключенном - переходит в предыдущий список.

// Если список первый или последний, то переходы в предыдущий и следующий не происходят.



list1 = [
    { text: 'First item of list 1'},
    { text: 'Second item of list 1'},
    { text: 'Third item of list 1'},
    { text: 'Fourth item of list 1'},
];
list2 = [
    { text: 'First item of list 2'},
    { text: 'Second item of list 2'},
    { text: 'Third item of list 2'},
    { text: 'Fourth item of list 2'},
];
list3 = [
    { text: 'First item of list 3'},
    { text: 'Second item of list 3'},
    { text: 'Third item of list 3'},
    { text: 'Fourth item of list 3'},
];
list4 = [
    { text: 'First item of list 4'},
    { text: 'Second item of list 4'},
    { text: 'Third item of list 4'},
    { text: 'Fourth item of list 4'},
];

var app = new Vue({
    el: '#TaskManager',
    data: {
        allLists: [
            list1,
            list2,
            list3,
            list4
        ],
        checkboxValues: [
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 }
        ]
    },
    methods: {
        getIndex(list) {
            return this.allLists.indexOf(list);
        },
        changeCheckbox(list) {
            indexOfList = this.getIndex(list);

            if ( this.checkboxValues[indexOfList].text === 0) {
                this.checkboxValues[indexOfList].text = 1;
            } else {
                this.checkboxValues[indexOfList].text = 0;
            }
        },
        transfer(list) {
            if (list.length === 0) {
                return alert('This list does not have any item, you can not transfer to the next/previous list. Fill this list with items to make transfers')
            }
            indexOfList = this.getIndex(list);

            // to right
            if ( this.checkboxValues[indexOfList].text === 0) {
                // if the last item -> can not go right 
                if (indexOfList === this.allLists.length-1) {
                    return alert('This list is the last, you can not transfer to the next list.')
                }

                // transfer to right 
                temp = list.pop();
                this.allLists[indexOfList+1].unshift(temp); 
            } 
            // to left 
            else {
                // if the first item -> can not go left 
                if (indexOfList === 0) {
                    return alert('This list is the first, you can not transfer to the previous list.')
                }
                
                // transfer to left
                temp = list.pop();
                this.allLists[indexOfList-1].unshift(temp); 
            }
              
        },
    }
})