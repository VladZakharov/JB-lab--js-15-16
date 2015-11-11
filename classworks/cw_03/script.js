(function (win) {

    var array, array_map, array_sort, array_each;
    var a = 5;
    array = [1, 2, 3, 4, 56, 4, 9, 4, 3, 98, 45, -765, 5];

    console.log(array);
    array_map = array.map(function (e) {
        return 'e = ' + e;
    });
    console.log(array_map);
    function a() {
        return this
    }

    var self = {'s': '^_^'};
    b = a.bind(self);
    console.log(b());

    function bind(a, b) {
        return function () {
            return a.apply(b, arguments);
        };
    }

    Function.prototype._bind = function (self) {
        var _this = this;
        return function () {
            _this.apply(self, arguments);
        }
    };
    Array.prototype._each = function (func) {
        for (var i = 0; i < this.length; i++) {
            func(i);
        }
        return this;
    };
    Array.prototype._map = function (func) {
        var new_array = [];
        for (var i = 0; i < this.length; i++) {
            new_array[i] = func(i);
        }
        return new_array;
    };
    Array.prototype._concat = function () {
        var new_array = [];
        for (var i = 0; i < this.length; i++) {
            new_array[i] = func(i);
        }
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] != "object")
                new_array[i] = arguments[i];
            else{
                var t = 0;
                for(e in this) {
                    new_array[i+t] = e;
                    t++;
                }
            }
        }
        return new_array;
    };
    Object.prototype._assign = function () {
        for (var i = 1; i < arguments.length; i++) {

        }

    }

    win['hhp'] = 'returned object';
})(window);