document.querySelector('.ball').addEventListener('click', changeBackground);

let ball = document.querySelector('.ball');

ball = true; 

function changeBackground() {
    ball = !ball
    if (ball){
        document.querySelector('.ball').style.left = '141px'
        document.querySelector('body').style.background = 'var(--dark)'
    } else {
        document.querySelector('.ball').style.left = ''
        document.querySelector('body').style.background = 'var(--light)'
    }
}