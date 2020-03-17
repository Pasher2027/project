"use strict";

let money, time; 

function start() {
    // time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) { //Проверка на правильное значение от пользователя
        money = +prompt("Ваш бюджет на месяц?", "");
    }

}

//Метод isNan() возвращает true если в переменную попали не цифры

function chooseExpenses() {
    
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            && a != '' && b != '' && a.length < 50) {

            appData.expenses[a] = b;

            alert("Сохранено!");
        } else {
            alert("Ошибка. Вы не/неправильно ответили на один из вопросов.");
            i--; 
        }
    }

}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(); 
    
    //Метод .toFixed() возвращает строковое значение и округляет до знака после запятой, который передается в скобках
    
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");
    
        
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

function detectLevel() {

    if (appData.moneyPerDay < 100) {
        alert("Минимальный уровень достатка");

    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert("Средний уровень достатка");

    } else if (appData.moneyPerDay > 2000 ) {
        alert("Высокий уровень достатка");

    } else {
        alert("Произошла ошибка");
    }

}
function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let a = prompt("Статья необязательных расходов?", "");

        appData.optionalExpenses[i] = a; 
    }
    
}

start();

let appData = {
    budget: money,
    expenses: {},
    savings: true,
    optionalExpenses: {},
    // timeData: time,
    // income: [],

};

//Объект, в котором используются "пустые" переменные нельзя объявлять
// до приминения функции, в которой используются переменные объекта
// Сложнооо..


// chooseExpenses();

// checkSavings();

detectDayBudget();

detectLevel();

chooseOptExpenses();



// let i = 0;

// while (i < 2) {

//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
//         && a != '' && b != '' && a.length < 50) {

//         appData.expenses[a] = b;

//         alert("Сохранено!");
//     } else {
//         alert("Ошибка. Вы не ответили на один из вопросов.");
//         i--; 
//     }
    
//     i++;
// }


// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
//         && a != '' && b != '' && a.length < 50) {

//         appData.expenses[a] = b;

//         alert("Сохранено!");
//     } else {
//         alert("Ошибка. Вы не ответили на один из вопросов.");
//         i--; 
//     }

//     i++;
// } 
// while (i < 2); 