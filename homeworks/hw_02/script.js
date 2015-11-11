function error() {
    throw new Error('Invalid Arguments');
}

/**
 * Задание 1. Создать функцию toGetParams, формирующую из
 * объекта строку параметров для GET-запроса.
 *
 * @example
 * var params = toGetParams({p1: 1, p2: 'hello'}); // p1=1&p2=hello
 *
 * @param {Object} obj
 * Объект, из которого будут формироваться строка параметров.
 *
 * @return {String} строка параметров.
 */
function toGetParams(obj) {
    if (typeof obj != 'object') {
        error();
    }
    var par, params = "";
    for (par in obj) {
        params += par + '=' + obj[par] + '&';
    }
    return params.substring(0, params.length - 1);
}
/**
 * Задание 2. Создать функцию formatUrl, формирующую из базового url и объекта
 * строку GET-запроса.
 *
 * @example
 * var getUrl = formatUrl('http://example.com', {a: 1, b: 2}); // 'http://example.com?a=1&b=2'
 *
 * @param {String} url
 * Базовый url
 *
 * @param {Object} obj
 * Объект, из которого будут формироваться строка параметров.
 *
 * @return {String} сформированный url.
 */
function formatUrl(url, obj) {
    if (typeof  obj != 'object' || url.length < 3) error();
    return url + '?' + toGetParams(obj);
}
/**
 * Задание 3. Создать функцию objectFromUrl, формирующую из базового url
 *
 *
 * @example
 * var obj = objectFromUrl('http://example.com/homeworks/hw_01?task=03&team=kkk#jsjs');
 * obj == {
 *      protocol:'http',
 *      host:'example.com',
 *      port:'',
 *      pathname:'/homeworks/hw_01',
 *      hash:'#jsjs',
 *      originQuery:'?task=03&team=kkk',
 *      query:{
 *          'task':'01',
 *          'team':'kkk'
 *      }
 *
 * @param {String} url
 * Базовый url
 *
 * @return {Object} сформированный obj.
 */
function objectFromUrl(url) {
    if (typeof url != 'string') throwError();

    var result = {};

    var params = '';

    var protocolRegEx = /[^:\/]+/i,
        hostRegex = /([^\/]+\.[^\/:]+)+/i,
        portRegEx = /\d+/i,
        pathNameRegEx = /(\/[^\?\/:]+)+/i,
        hashRegEx = /#[a-z\d_-]+/i,
        originQueryRexEx = /\?[^#]+/i,
        queryRegEx = /[^\?=&]+=[^&#]+/gi,
        paramRegex = /[^=]+/gi;

    result.protocol = url.match(protocolRegEx)[0];
    url = deleteFindRegEx(url, result.protocol);
    result.host = url.match(hostRegex)[0];
    url = deleteFindRegEx(url, result.host);
    result.pathname = url.match(pathNameRegEx)[0];
    url = deleteFindRegEx(url, result.pathname);
    result.hash = url.match(hashRegEx)[0];
    url = deleteFindRegEx(url, result.hash);
    result.originQuery = url.match(originQueryRexEx)[0];

    result.query = {};
    params = url.match(queryRegEx);
    url = deleteFindRegEx(url, result.originQuery);

    for (var i in params) {
        var el = params[i];
        var elem = el.match(paramRegex);
        result.query[elem[0]] = elem[1];

    }
    for (var i = 0; i < 2; i++) {
        url = deleteFindRegEx(url, '/');
        url = deleteFindRegEx(url, ':');
    }
    result.port = url;
    if (result.port.length < 1) {
        result.port = "";
    }
    return result;
}

function deleteFindRegEx(s, regS) {
    s = s.replace(regS, '');
    return s;
}