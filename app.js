let menu = document.querySelector('.menu');
let spanTop = document.querySelector('.span1');
let spanMiddle = document.querySelector('.span2');
let spanBottom = document.querySelector('.span3');
let links = document.querySelector('.links');


menu.addEventListener('click', menuhamburger);

function menuhamburger()
{
    if(menu.classList[1] != 'open')
    {
        menu.classList.add('open');
        spanTop.style.transform = 'rotate(45deg)';
        spanBottom.style.marginTop = '-5px';
        spanMiddle.style.display = 'none';
        spanMiddle.style.marginBottom = '3px';
        spanBottom.style.transform = 'rotate(-45deg)';
        links.style.top = '75px';
       
    }
    else
    {
      
        spanTop.style.transform = 'rotate(0deg)';
        spanBottom.style.marginTop = '0px';
        spanMiddle.style.display = 'block';
        spanBottom.style.transform = 'rotate(0deg)';
        links.style.top = '-300px';

        menu.classList.remove('open');
    }
}