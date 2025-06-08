let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
let body = document.getElementById('body');
let menu = document.querySelector('.menu');
let close = document.getElementById('close');
let logo = document.getElementById('logo');
let main = document.getElementById('main');
let card = document.querySelector('.card');



moon.onclick =  () => {
    body.classList.add('dark-mode');
    menu.style.backgroundColor = '#0000007d';
};


sun.onclick =  () =>  {  body.classList.remove('dark-mode');  menu.style.backgroundColor =  '#f0f0f0';}


logo.onclick = () => menu.style.display = 'inline-block';

close.onclick = () => {menu.style.display = 'none';
        main.style.width = 'calc(100%-360px)';
        card.style.width = '360px';
}



