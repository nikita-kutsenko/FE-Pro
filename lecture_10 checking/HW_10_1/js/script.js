// В документе мы имеем иерархию ul.root>li*3>ul>li*5 

// 1. Написать скрипт, который добавит класс `last` всем последним li в группах (необходимо почитать метод 
// document.querySelectorAll())

// Написать функцию setFirstItemClassName(level), где level - это номер уровня вложенности, 
// в котором нужно произвести изменения. Функция setFirstItemClassName должна установить первому 
// тегу группы - класс `first-item` 

// * при добавлении классов - должен изменится цвет фона на красный(first) и зеленый(last),
//  с анимацией - задержка 2 секунды


let list = document.querySelector('.root');
setFirstItemClassName(3, list);

function setFirstItemClassName(level, element)
{
    if(level !==1 && element.children.length > 0) 
    {
        for(child of element.children)
        {
			setFirstItemClassName(level-1,child);
		}
    } 
    else 
    {
        // first 
        element.children[0].classList.add('first-item');
        setBackgroundColor(element.children[0], 'red');

        // last 
        element.children[element.children.length-1].classList.add('last-item');
        setBackgroundColor(element.children[element.children.length-1], 'green');
    }
}

function setBackgroundColor( element, color ) 
{
    setTimeout(function(element, color) 
    {
        element.style.backgroundColor = color;
    }, 2000, element, color)
}