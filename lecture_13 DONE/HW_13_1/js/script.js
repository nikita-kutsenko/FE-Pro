// 1. Сформировать массив объектов, в котором объектом будет Фильм с полем name и price.
// 2. Вывести в консоль массив с названием фильмов, которые имеют название и цену.
// 3. Отобразить итоговую стоимость заказа для выше отфильтрованных фильмов.

// all tr 
trList = document.querySelectorAll('.cinema__item');

// 1. 
array = new Array();

for ( i = 0; i < trList.length; i++ ) {
    array[i] = new Object();

    array[i].name = trList[i].children[0].textContent;
    array[i].price = trList[i].children[1].textContent;
}

// console.log(trList);
console.log('1. Array of all films:',  array);

// 2.
filteredArray = array.filter( film => film.name != "" &&  film.price != "");
console.log('2. Filtered array of all films, which have name and price', filteredArray);

// 3.
filteredArrayPrice = filteredArray.reduce( (total, film) => {
    // price = 
    return total += parseInt(film.price);
}, 0);
console.log('3. Total price for all films:', filteredArrayPrice, '$');
