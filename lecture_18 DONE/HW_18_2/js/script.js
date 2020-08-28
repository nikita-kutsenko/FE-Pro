// Написать промис, который будет запрашивать ввод с клавиатуры чисел (использовать тэг input, с очисткой после каждого ввода), 
// которые сохранит в массив. Закончить запрос чисел необходимо тогда, когда закончится время. Время - 10 сек. После этого - 
// выполнить операцию, которая выведет массив в консоль.


let input = document.body.querySelector("#input");
let arrayOfNumbers = new Array();

let getNumber = (data) => {
    return new Promise( (response, reject) => {
        if ( data != '') {
            response(data);
        }
    });
} 

let inputFunction = () => {
    getNumber( input.value )
        .then(
            (dataNumber) => {
                return arrayOfNumbers.push(dataNumber);
            }
        )
        .then (
            () => {
                return input.value = "";
            }
        )
        .then (
            () => {
                console.log('array of numbers :>> ', arrayOfNumbers);
            }
        )
}

input.addEventListener("change", inputFunction);

setTimeout(()=>{
    console.log('********************************************');
    console.log('Full array of numbers :>> ', arrayOfNumbers);
    input.removeEventListener("change", inputFunction);
},10000);