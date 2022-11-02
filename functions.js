// Создайте функцию sayError(), которая будет выводить
// (при помощи диалогового окна alert) сообщение
// с текстом «Some error occurred!».

/* function sayError() {
    alert("Some error occurred!");
}
sayError(); */

// Создайте функцию showError(x), которая будет выводить
// (при помощи диалогового окна alert) сообщение
// с текстом «Error X occurred!», где Х — текст из аргумента функции
// (например, вызов showError(‘Out of memory’)
// должен вывести сообщение «Error Out of memory occurred!»).

/* function showError(x) {
    alert(`Error ${x} occurred!`);
}
showError("Out of memory"); */

// Создайте функцию createHeaders(N), которая создаст на странице 
// N заголовков второго уровня (<h2>) с надписями Header1, Header2 … HeaderN.

/* function createHeaders(N) {
    for (let i = 1; i <= N; i++) {
        document.write(`<h2>Header${i}</h2>`);
    }
}
createHeaders(67); */

// Создайте функцию checkPassword(x), которая вернет значение true,
// если в качестве аргумента в нее будет передан допустимый пароль 
// (одно из значений «Step», «Web» или «JavaScript»). 
// Иначе функция должна вернуть false.

/* function checkPassword(x) {
    if (x === "Step" || x === "Web" || x === "JavaScript") 
        return true;
    else
        return false;
}
alert(checkPassword("JavaScript")); */

// Создайте функцию определения знака числа sign(x),
// которая вернет значение –1, если аргумент «х» — отрицательное число, 
// 1 — если положительное, 0 — если аргумент «х» равен нулю.

/* function sign(x) {
    if (x > 0)
        return 1;
    else if (x < 0)
        return -1;
    else if (x === 0)
        return 0;
}
alert(sign(0)); */

// Предложите имя (согласно правилам именования) и создайте функцию,
// которая будет возвращать названия дней недели по их номеру:
// 0-Sunday, 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday

/* function dayOfTheWeek(x) {
    switch(x) {
        case 0: alert("Sunday");
        break;
        case 1: alert("Monday");
        break;
        case 2: alert("Tuesday");
        break;
        case 3: alert("Wednesday");
        break;
        case 4: alert("Thursday");
        break;
        case 5: alert("Friday");
        break;
        case 6: alert("Saturday");
        break;
        default: alert("Oops! Something went wrong!");
        break;
    }
}
dayOfTheWeek(6); */