"use strict";

let money, 
    time,
    items;

function start() {
    // time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) { //Проверка на правильное значение от пользователя
        money = +prompt("Ваш бюджет на месяц?", "");
    }

}

//Метод isNan() возвращает true если в переменную попали не цифры



start();

let appData = {
    budget: money,
    expenses: {},
    savings: true,
    optionalExpenses: {},
    chooseExpenses: function () {

        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
                a != '' && b != '' && a.length < 50) {

                appData.expenses[a] = b;

                alert("Сохранено!");
            } else {
                alert("Ошибка. Вы не/неправильно ответили на один из вопросов.");
                i--;
            }
        }

    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        //Метод .toFixed() возвращает строковое значение и округляет до знака после запятой, который передается в скобках

        alert("Ежедневный бюджет: " + appData.moneyPerDay);

    },
    detectLevel: function () {

        if (appData.moneyPerDay < 100) {
            alert("Минимальный уровень достатка");

        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert("Средний уровень достатка");

        } else if (appData.moneyPerDay > 2000) {
            alert("Высокий уровень достатка");

        } else {
            alert("Произошла ошибка");
        }


    },
    checkSavings: function () {

        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");


            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }

    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = a;
        }
    },
    chooseIncome: function () {

        items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if ( typeof(items) != "string" || items == "" || typeof(items)  == null ) {
            alert("Ошибка! Нельзя вводить не строковое/пустое значение или нажимать кнопку отмены.");
        } else {

            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то ещё?", ""));
            appData.income.sort();
            appData.income.forEach(function(value, i) {
                alert(`Способы доп.заработка: ${i + 1}. ${value}`);
            });
        }

    },


    // timeData: time,
    // income: [],

};


for (let key in appData) {
    console.log(`Наша программа включает в себя данные: ${key} - ${appData[key]}`);
}
//Объект, в котором используются "пустые" переменные нельзя объявлять
// до приминения функции, в которой используются переменные объекта
// Сложнооо..


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