/** isValidSelector
 * Проверяет css селектор на валидность
 * @param {String} selector
 * @return {boolean}
 * @example
 * isValidSelector('#id.class elem [attr="qwe"]') //true
 * isValidSelector('12 {} any string[attr=qwe=1]')//false
 */
function isValidSelector(selector){

}
/**
 * -- test your might
 * minSelector
 * По заданому css селектору возвращает его оптимизированный вариант
 * @param {String} selector
 * @return {String} selector
 * @example
 * minSelector('div#id_1 .class_1 [class="class_2"]') // "#id_1 .class_1 .class_2"
 * minSelector('.class_1.class_2, .class_2.class_1') // ".class_1.class_2" || ".class_2.class_1"
*/
function minSelector(selector){

}
/**
 * stringTempl - фукция шаблонизатор строк.
 * Принимается строка-шаблон в форамте 'blah-blah {{0}}, blah {{1}}...',
 * следом в функцию передаются параметры, общее количество которых должно соответствовать вставок {{x}}
 * Если передаваемых параметров не хватает, то выбрасывается исключение
 *
 * @example
 * stringTempl('my, {{0}} {{1}}', 'favorite', 'template'); // 'my favorite template'
 * stringTempl('my, {{0}} {{1}}', 'favorite'); // 'Error: Invalid arguments count'
 *
 * @param {String} templ
 * Строка-шаблон.
 *
 * @param {Mixed...} values
 * Значения, которые заменят {0}, {1}... в строке-шаблоне.
 *
 * @return {String} отформатированная строка.
 */
function stringTempl(templ) {
    var regex = /\{\{\d}}/gim;
    var arr = templ.match(regex);
    if (arr.length != (arguments.length - 1)) throw new Error("Invalid arguments");
    for (var i = 0; i < arr.length; i++) {
        templ = templ.replace(arr[i], arguments[i + 1]);
    }
    return templ;
}