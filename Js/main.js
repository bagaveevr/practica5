
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sumSalaries() {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    alert(`Сумма зарплат: ${sum}`);
}


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
    alert(`Меню после изменения: width = ${menu.width}, height = ${menu.height}, title = ${menu.title}`);
}


let calculator = {
    read() {
        this.a = parseFloat(prompt("Введите первое число:", "0"));
        this.b = parseFloat(prompt("Введите второе число:", "0"));
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

function runCalculator() {
    calculator.read();
    alert(`Сумма: ${calculator.sum()}`);
    alert(`Произведение: ${calculator.mul()}`);
}


function extractCurrencyValue(str) {
    return parseFloat(str.slice(1));
}

function extractCurrency() {
    let value = extractCurrencyValue("$120");
    alert(`Числовое значение: ${value}`);
}


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

function getUserNames() {
    let names = users.map(user => user.name);
    alert(`Имена: ${names.join(", ")}`);
}


function getAverageAge(users) {
    let totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}

function getAverageAge(users) {
    let avgAge = getAverageAge(users);
    alert(`Средний возраст: ${avgAge}`);
}
