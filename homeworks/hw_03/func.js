/**
 * Object.create(proto[, propertiesObject])
 * Создаёт объект - наследник proto.
 *
 * @param {Object, Function, null} proto - объект, который станет прототипом вновь созданного объекта.
 *
 * @param {Object} propertiesObject - необязательный объект, чьи поля будут добавленый в новосозданный объект
 *
 * @return {Object}
 *
 * Подробнее по методу можно посмотретьпо спецификации ES5
 */
Object.create = function (proto) {
    if (arguments.length == 0 || (typeof arguments[0] != 'object' && typeof arguments[0] != 'function') || !(arguments[1] && typeof arguments[1] != 'object')) {
        throw new Error("Illegal arguments");
    }
    var func = function () {};
    func.prototype = proto;
    var result = new func();
    if (arguments.length > 1) {
        var propertiesObject = arguments[1];
        for (var elem in propertiesObject) {
            result[elem] = propertiesObject[elem];
        }
    }
    return result;
};


/**
 * -- test your might
 * node - функция построение дерева.
 * Вызов функции создаёт у текущего узла дочерний с именем name и возвращает созданный узел,
 * который в свою очередь является точно такой же функцией node.
 * При вызове node, как конструктора будет создаваться корневой узел, не имеющий родителя
 *
 * @example
 * var a,b,c,d,e,f;
 * a = new node('root');
 * b = a('b');
 * c = a('c');
 * d = b('d');
 * e = b('e');
 * f = e('f');
 * e.getPath() // 'root/b/f/e'
 * структура всего дерева: root:[b:[d,e:[f]],c]
 *
 * @param {String} name - имя узла
 *
 * @method getChild() => массив всех дочерних узлов
 *
 * @method getPath() => путь от корневого до текущего узла
 *
 * @method getName() => name
 *
 * @return {Function} node
 */
function node(name){

}

