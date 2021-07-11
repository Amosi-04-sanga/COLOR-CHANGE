const container = document.querySelector('.container');

const btn01 = document.querySelector('.button-1');
const btn02 = document.querySelector('.button-2');
const btn03 = document.querySelector('.button-3');
const btn04 = document.querySelector('.button-4');
const btn05 = document.querySelector('.button-5');
const btn06 = document.querySelector('.button-6');
const btn07 = document.querySelector('.button-7');
const btn08 = document.querySelector('.button-8');

const buttons = document.querySelectorAll('.button');
const buttonsArr = Array.from(buttons);

// buttons bgColors.
btn01.style.backgroundColor = 'rgb(15, 235, 15)';
btn02.style.backgroundColor = 'rgb(9, 77, 9)';
btn03.style.backgroundColor = 'rgb(10, 82, 110)';
btn04.style.backgroundColor = 'rgb(140, 187, 206)';
btn05.style.backgroundColor = 'rgb(97, 24, 156)';
btn06.style.backgroundColor = 'rgb(130, 12, 226)';
btn07.style.backgroundColor = 'rgb(127, 151, 19)';
btn08.style.backgroundColor = 'rgb(127, 15, 19)';


function changeColor( color ) {
    container.style.backgroundColor = color;
}


buttonsArr.forEach( button => {
    
     button.addEventListener( 'click', () => {
          changeColor(button.style.backgroundColor);
     });

});

