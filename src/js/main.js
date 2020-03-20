"use strict";

let start = document.querySelector('#start'),
    table = document.querySelector('.result-table').children,
    arrTable = Array.from(table),
    arrValue = [],
    inputs = document.querySelectorAll('.expenses-item'),
    confirm = document.getElementsByTagName('button')[0],
    confirmSecond = document.getElementsByTagName('button')[1],
    calcButton = document.getElementsByTagName('button')[2],
    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    income = document.querySelector('#choose-income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('#month-value'),
    day = document.querySelector('#day-value');

//.constructor.name

for (let i = 0, k = 1; i < arrTable.length/2; i++, k += 2) {
    arrValue[i] = arrTable[k];
    
}

console.log();
