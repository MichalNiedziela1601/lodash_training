'use strict';

module.exports = {
    castArray: function ()
    {
        return [{name: 'Jack', surname: 'Strong', age: 26, address: 'address'}];
    }, clone: function ()
    {
        return [[{name: 'Thorgal', age: 32}, {name: 'Bjork', age: 21}, {name: 'Edwin', age: 27}]];
    }, cloneDeep: function ()
    {
        return [[['Bob', {age: 44}], ['Mark', {age: 35}]]];
    }, eq: function ()
    {
        return [{name: 'Michael'}, {name: 'John'}];
    }, gt: function ()
    {
        return [6, -3];
    }, gte: function ()
    {
        return [3, 3];
    }, isArguments: function ()
    {
        return [function ()
        {
            return arguments;
        }(3, 4, 5)];
    }, isArray: function ()
    {
        return [[[1, 2, 3], ['dd', 'f'], 'ff']];
    }, isArrayBuffer: function ()
    {
        return [new ArrayBuffer(2)];
    }, isArrayLike: function ()
    {
        var str = String('qwertyuiopasdfghjklzxcvbn');
        return [str];
    }, isArrayLikeObject: function ()
    {
        return [[2, 5, 7]];
    }, isBoolean: function ()
    {
        return [3, 5];
    }, isBuffer: function ()
    {
        return [new Int32Array(8)];
    }, isDate: function ()
    {
        return [new Date()];
    }, isEmpty: function ()
    {
        return [['sdf', 'sdf', 'dd']];
    }, isEqual: function ()
    {
        return [{name: 'sdf', age: 44, weight: 55}, {name: 'sdf', age: 44, weight: 55}];
    }, isEqualWith: function ()
    {
        return [['Hi', 'John'], ['Hi', 'John']];
    }, isError: function ()
    {
        return [new ReferenceError];
    }, isFinite: function ()
    {
        var infinity = 3 * Number.POSITIVE_INFINITY;
        return [infinity];
    }, isFunction: function ()
    {
        return [function ()
        {
        }];
    }, isInteger: function ()
    {
        return [Number.POSITIVE_INFINITY];
    }, isLength: function (arr)
    {
        return [arr.length];
    }, isMap: function ()
    {
        var map = new Map();
        return [map];
    }, isMatch: function (obj)
    {
        return [obj, {age: 34}];
    }, isMatchWith: function ()
    {
        var object = {'greeting': 'hello'};
        var source = {'greeting': 'hi'};
        return [object, source];
    }, isNaN: function ()
    {
        return [undefined];
    }, isNative: function ()
    {

        return [String.prototype.charAt];
    }, isNil: function ()
    {
        return [undefined];
    }, isNull: function ()
    {
        return [null];
    }, isNumber: function ()
    {
        var number = Number(44);
        var obje = new Object(number);
        return [obje];
    }, isObject: function ()
    {
        return [{}];
    }, isObjectLike: function ()
    {
        return [['string', 4]];
    }, isPlainObject: function ()
    {
        return [{name: 'Bartek', adult: true, married: false}];
    }, isRegExp: function ()
    {
        return [/abc/];
    }, isSafeInteger: function ()
    {
        return [Number.MIN_VALUE];
    }, isSet: function ()
    {
        return [new Set];
    }, isString: function ()
    {
        return ['asdfghjkl'];
    }, isSymbol: function ()
    {
        return [Symbol.iterator];
    }, isTypedArray: function ()
    {
        return [new Uint16Array];
    }, isUndefined: function ()
    {
        return [undefined];
    }, isWeakMap: function ()
    {
        return [new WeakMap];
    }, isWeakSet: function ()
    {
        return [new WeakSet];
    }, lt: function ()
    {
        return [-4, -3];
    }, lte: function ()
    {
        return [3, 3];
    }, toArray: function ()
    {
        return [{name: 'Jack', age: 26}];
    }, toInteger: function ()
    {
        return ['36.6'];
    }, toLength: function ()
    {
        return [3.2];
    }, toNumber: function ()
    {
        return ['2016'];
    }, toPlainObject: function ()
    {
        function Foo()
        {
            this.b = 2;
        }
        Foo.prototype.c = 3;

        return [{'a': 1}, new Foo];
    }, toSafeInteger: function ()
    {
        return [Number.POSITIVE_INFINITY];
    }, toString: function ()
    {
        return [[1,12,2015]];
    }
};
