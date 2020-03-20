"use strict";


let body = document.body,
    menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    menuItemNew = document.createElement('li'),
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    ans = prompt("Ваше отношение к технике Apple?", ""),
    question = document.querySelector('#prompt');

menu.insertBefore(menuItem[2], menuItem[1]);


menuItemNew.classList.add('menu-item');

menuItemNew.textContent = 'Пятый пункт';

menu.appendChild(menuItemNew);

body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

question.textContent = ans;