"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),

    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    
    quest1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    
    quest2 = +prompt("Во сколько обойдется?", ""),
    
    quest3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    
    quest4 = +prompt("Во сколько обойдется?", "");


let appData = {
    sum: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

};

appData.expenses.quest1 = quest2;

appData.expenses.quest3 = quest4;

alert(`${appData.sum / 30} рублей`);