"use strict";

let startBtn = document.querySelector('#start'),
    table = document.querySelector('.result-table').children,
    arrTable = Array.from(table),
    arrValue = [],
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optExpensesBtn = document.getElementsByTagName('button')[1],
    budgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

for (let i = 0, k = 1; i < arrTable.length / 2; i++, k += 2) {
    arrValue[i] = arrTable[k];

}

startBtn.addEventListener('click', function () {

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while (isNaN(money) || money == "" || money == null) { //Проверка на правильное значение от пользователя
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    arrValue[0].textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();

});

expensesBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;

            if (typeof (a) != null && typeof (b) != null &&
                a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                alert("Ошибка. Вы не/неправильно ответили на один из вопросов.");
                i--;
            }
        }
        arrValue[3].textContent = sum;

    } else {
        alert('Вы не начали рассчёт');
    }
});

optExpensesBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {

        for (let i = 0; i <= optionalExpensesItems.length; i++) {
            let a = optionalExpensesItems[i].value;
            appData.optionalExpenses[i] = a;
            arrValue[4].textContent += appData.optionalExpenses[i] + ' ';
        }
    } else {
        alert('Вы не начали рассчёт');
    }
});

budgetBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {

        appData.moneyPerDay = ( (appData.budget - +arrValue[3].textContent) / 30).toFixed();

        //Метод .toFixed() возвращает строковое значение и округляет до знака после запятой, который передается в скобках

        arrValue[1].textContent = appData.moneyPerDay;


        if (appData.moneyPerDay < 100) {
            arrValue[2].textContent = "Минимальный уровень достатка";

        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {

            arrValue[2].textContent = "Средний уровень достатка";

        } else if (appData.moneyPerDay > 2000) {
            arrValue[2].textContent = "Высокий уровень достатка";

        }

    } else {
        alert('Вы не начали рассчёт');
    }

});

incomeItem.addEventListener('input', function () {

    items = incomeItem.value;
    appData.income = items.split(', ');
    arrValue[5].textContent = appData.income;
});

savings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }

});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        arrValue[6].textContent = appData.monthIncome.toFixed(1);
        arrValue[7].textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        arrValue[6].textContent = appData.monthIncome.toFixed(1);
        arrValue[7].textContent = appData.yearIncome.toFixed(1);
    }
});


let money,
    time,
    items;

//Метод isNan() возвращает true если в переменную попали не цифры


let appData = {
    budget: money,
    expenses: {},
    savings: false,
    timeData: time,
    income: [],
    optionalExpenses: {},
};
