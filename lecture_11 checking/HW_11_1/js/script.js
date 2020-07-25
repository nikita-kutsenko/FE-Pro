// Создать блок по середине экрана. При нажатии на стрелки - блок смещается в соответствующем направлении. 
// Блок должен "упираться в экран", т.е. не может выйти за пределы экрана.
// 1) блок не вываливается за экран
// 2) при каждом "врезании" в стенку - блок отпрыгивает на step*2 пикселей в противоположном направлении.
// 3) При каждом отпрыгивании - по середине блока появляется надпись "БЭМС", которая исчезает через 2 секунды

// left 
// keyCode: 37

// top 
// keyCode: 38

// right
// keyCode: 39

// down
// keyCode: 40

block = document.querySelector('.block');
boom = document.querySelector('.text');
console.dir(block);
// console.dir(boom);

document.addEventListener('keydown', moveBlock);

function textDisplay() {
    boom.style.display = 'flex';
    block.style.boxShadow = '0 0 25px 0 #ff0000';

    setTimeout(function(){
        boom.style.display = 'none';
        block.style.boxShadow = '0 0 5px 0 #2e2e2e';
    },2000);
}

function moveBlock(event) {
    step = 100;
    console.dir(block);
//     console.dir(event);
//     console.log(block.style.marginLeft);

    // left 
    if (event.keyCode == 37) {
        block.style.marginLeft = block.offsetLeft - step + 'px';

        if ( block.style.marginLeft <= step + 'px' ) {
            block.style.marginLeft = block.offsetLeft + 2*step + 'px';

            textDisplay();
        }
    } 
    // top 
    else if (event.keyCode == 38) {
        block.style.marginTop = block.offsetTop - step + 'px';

        if ( block.style.marginTop <= step + 'px' ) {
            block.style.marginTop = block.offsetTop + 2*step + 'px';

            textDisplay();
        }
    } 
    // right 
    else if (event.keyCode == 39) {
        block.style.marginLeft = block.offsetLeft + step + 'px';

        if ( block.offsetLeft + block.offsetWidth  >= window.innerWidth ) {
            block.style.marginLeft = block.offsetLeft - 2*step + 'px';
            
            textDisplay();
        }
    } 
    // down 
    else if (event.keyCode == 40) {
        block.style.marginTop = block.offsetTop + step + 'px';

        if ( block.offsetTop + block.offsetHeight  >= window.innerHeight ) {
            block.style.marginTop = block.offsetTop - 2*step + 'px';
            
            textDisplay();
        }
    } 
}