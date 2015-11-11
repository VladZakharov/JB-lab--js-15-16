/**
 * Задание 1. Создать функцию multiply, перемножающаю аргументы,
 * переданных в качестве аргументов. Если переданные аргументы не являются
 * конечными числами, либо в отсуствии менее двух аргументов,
 * выбрасывать ошибку "Invalid arguments"
 * (используйте throw new Error("Invalid arguments")).
 *
 * @example
 * var result = multiply(1,2); // 2
 *
 * @param {Number} a,b,c,d
 * Числа для перемножения. Количество входных чисел неограничено*
 * @return {Number} Произведение всех аргументов.
 */
function multiply(a, b, c, d) {
    if (arguments.length < 2)
        throw new Error("Invalid arguments");
    forEach(function () {
        if (isNaN(this))
            throw new Error("Invalid arguments");
    }, arguments);

    var result = 1;
    for (i in arguments)
        result *= i;
    return result;
}
/**
 * Задание 2. Создать функцию factorial для подсчета факториала. Функция в качестве параметра
 * принимает целое число. Результатом выполнения будет факториал (произведение всех чисел,
 * начиная с 1 до самого числа включительно) этого числа.
 *
 * @example
 * var fact = factorial(5); // 1*2*3*4*5 = 60
 *
 * @param {Number} n
 * Число, для которого считается факториал.
 *
 * @return {Number} факториал числа.
 */
function factorial(n) {
    if (isNaN(n) || n < 0) return;
    var result = 1;
    for (var i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}
/**
 * Задание 3. Создать функцию pow для возведения числа в степень. Функция в качестве параметра
 * принимает число и целое число.
 *
 * @example
 * var pow_2_4 = pow(2,4); // 16
 *
 * @param {Number} a
 * Число, которое возводят в степень.
 *
 * @param {Number} b
 * Целое число, показатель степени.
 *
 * @return {Number} a^b.
 */
function pow(a, b) {
    if (isNaN(a) || isNaN(b) || !isInteger(b)) return;
    var result = a;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
/**
 * Задание 3. Создать функцию repeat.
 *
 * @example
 * var txt = repeat('hello', 3, '-'); // 'hello-hello-hello'
 * var txt2 = repeat('hello', 3); // 'hellohellohello'
 *
 * @param {String} str
 * Строка, которая будет повторяться.
 *
 * @param {Number} count
 * Количество повторений.
 *
 * @param {String} [sep]
 * Разделитель (необязательный параметр).
 *
 * @return {String} Строка с повотрениями.
 */
function repeat(str, count, sep) {
    if (arguments.length < 2) return;
    if (isNaN(count)) return;
    var result = '';
    for (var i = 0; i < count; i++) {
        for (var j = 0; j < arguments.length; j += 2)
            result += arguments[j];
    }
    return result;
}
/**
 * Задание 4. Создать функцию compare. Сравнивающую два объекта. Валидация парамметров.
 *
 * @example
 * var a, b, c;
 * a = {'q':1,'b':2};
 * b = {'q':1,'b':2};
 * c = {'q':1,'b':3};
 * compare(a,b) //true
 * compare(b,c) //false
 *
 * @param {Object} a
 * Первый объект
 *
 * @param {Object} b
 * Второй объект
 *
 * @return {Boolean} результат сравнения.
 */
function compare(a, b) {
    if (Object.keys(a).length != Object.keys(b).length) return false;
    for (var key in a) {
        if (typeof(a[key]) == "object" && typeof(b[key]) == "object" && !compare(a[key], b[key])) {
            return false;
        }
        if (a[key] != b[key]) return false;
    }
    return true;
}
/**
 * Задание 5. Создать функцию-фабрику телефонных книг phoneList, создающую телефоный лист.
 * @param {String} name
 * Имя телефонного листа
 *
 * @return {Function} Функция добавления в телефонный лист. Принемает два парамметра: name, num -
 * имя контакта и номер соответственно
 * Функция должна иметь в себе поле name, переданное при создании.
 * И набор методов:
 * @method {Object} getAll - возвращает все контакты листа.
 * @method getForName(name) - возвращает номер контакта по имени.
 * @method getForNum(num) - возвращает имя контакта по номеру.
 * @method {Number} getLength - возвращает количество всех контактов.
 *
 * @example
 * var myList = phoneList("friends");
 * myList('me', 123);
 * myList('you',321);
 * myList.name // "friends"
 * myList.getLength() // 2
 * myList.getForName('me') // 123
 * myList.getForNum(321) // "you"
 * myList.getAll() // {'me':123,'you':321}
 *
 */
PhoneList = function (name) {
    var list = {};

    function add(name, num) {
        list[name] = num;
    }

    add.getAll = function () {
        return list;
    };

    add.phoneListName = name;

    add.getForName = function (name) {
        return list[name];
    };

    add.getForNum = function (num) {
        for (var i in list) {
            if (list[i] == num)
                return i;
        }
    };

    add.getLength = function () {
        return list.length;
    };

    return add;
};