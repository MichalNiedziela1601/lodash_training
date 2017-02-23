'use strict';
var _ = require('lodash');
module.exports = {

    assign: function () {
        function Bar() {
            this.number = 6;
            this.string = 'default';
        }

        Bar.prototype.square = 36;
        return [{
            number: 5, square: 25, ping: function () {
                return 'Number: ' + this.number;
            },
            pong: function () {
                return 'Number: ' + this.square;
            }
        }, new Bar()];
    },

    //alias _.extend
    assignIn: function () {
        var obj = {
            number: 5, square: function () {
                return 'Square: ' + Math.pow('a', 2);
            }
        };

        function Bar() {
            this.number = 4;
            this.cube = 64;
        }

        Bar.prototype.square = function () {
            return 'Square: ' + Math.pow('b', 2);
        };
        Bar.prototype.fourthPower = 256;
        return [obj, new Bar()];
    },

    at1: function (obj) {
        return [obj, ['book[0].other.pages', 'book[0].count']];
    },

    at2: function () {
        var obj = {
            0: 'mate',
            1: 'companion',
            2: 'fellow',
            3: 'worker',
            4: 'friend',
            5: 'helper'
        };
        return [obj, ['0', '4']];
    },

    defaults: function () {
        return [{name: 'John', surname: 'Smith', age: 25},
            {name: 'Tom', gender: 'male'}, {surname: 'Twist'}];
    },

    defaultsDeep: function () {
        var obj = {
            data: {
                text: 'Tim',
                reversedText: 'miT'
            }
        };
        var obj2 = {
            data: {
                text: 'mouse',
                reversedText: 'esuom',
                lengthText: function () {
                    return this.text.length;
                }
            }
        };
        return [obj, obj2];
    },

    findKey1: function (obj) {
        return [obj, function (o) {
            return o.number > 20;
        }];
    },

    findKey2: function (obj) {
        var obj2 = {number: 15};
        return [obj, obj2];
    },

    findKey3: function (obj) {
        return [obj, ['number', 20]];
    },

    findKey4: function (obj) {
        return [obj, 'number'];
    },

    findLastKey1: function (obj) {
        return [obj, function (o) {
            return o.pizza === true;
        }];
    },

    findLastKey2: function (obj) {
        return [obj, {lasagne: false}];
    },

    findLastKey3: function (obj) {
        return [obj, ['pasta', true]];
    },

    findLastKey4: function (obj) {
        return [obj, 'pizza'];
    },

    forIn: function () {
        function Foo() {
            this.arms = 2;
            this.legs = 2;
        }

        Foo.prototype.head = 1;
        return [new Foo(), function (val, key, obj) {
            obj[key] = val * val;
            return obj[key];
        }];
    },

    forInRight: function () {
        function Foo() {
            this.arms = 2;
            this.legs = 2;
        }

        Foo.prototype.head = 1;
        function fn(val, key, obj) {
            obj[key] = val * 2;
            return obj[key];
        }

        return [new Foo(), fn];
    },

    forOwn: function () {
        function Foo() {
            this.r = 7;
            this.d = 14;
        }

        Foo.prototype.l = 4.4;
        function fn(val, key, obj) {
            if (key === 'r') {
                obj[key] = val + 1;
                return obj[key];
            }
        }

        return [new Foo(), fn];
    },

    forOwnRight: function () {
        function Foo() {
            this.r = 7;
            this.d = 14;
        }

        Foo.prototype.l = 4.4;
        function fn(val, key, obj) {
            if (key === 'r') {
                obj[key] = val + 1;
                return obj[key];
            }
        }

        return [new Foo(), fn];
    },

    functions: function () {
        function Foo() {
            this.square = _.constant(4);
        }

        return [new Foo()];
    },

    functionsIn: function () {
        function Foo() {
            this.square = _.constant(4);
        }

        Foo.prototype.cube = function () {
        };
        return [new Foo()];
    },

    get1: function (obj) {
        return [obj, 'exercises.tasks[2].thirdTask'];
    },

    get2: function (obj) {
        return [obj, ['exercises', 'tasks', '2', 'thirdTask']];
    },

    get3: function (obj) {
        return [obj, 'exercises.tasks[2].thirdTas', 'default value'];
    },

    has1: function () {
        var obj = {
            bike: {
                wheels: 2,
                saddle: 1
            }
        };
        return [obj, 'bike.saddle'];
    },

    has2: function () {
        var obj = {
            bike: {
                wheels: 2,
                saddle: 1
            }
        };
        return [obj, ['bike', 'wheels']];
    },

    hasIn1: function () {
        var obj = {
            bike: {
                wheels: 2,
                saddle: 1
            }
        };
        return [obj, 'bike.saddle'];
    },

    hasIn2: function () {
        var obj = {
            bike: {
                wheels: 2,
                saddle: 1
            }
        };
        return [obj, ['bike', 'wheels']];
    },

    invert: function (obj1) {
        return [obj1];
    },

    invertBy1: function (obj1) {
        return [obj1];
    },

    invertBy2: function (obj) {
        return [obj];
    },

    invoke1: function (obj) {
        return [obj, 'key[0].number.random.unshift', 99];
    },

    invoke2: function (obj) {
        return [obj, 'key[0].number.random.pop'];
    },

    keys: function () {
        function Foo() {
            this.teacher = 'Mr. Tom';
            this.students = 27;
            this.girls = 15;
            this.boys = 12;
        }

        Foo.prototype.animals = 1;
        return [new Foo()];
    },

    keysIn: function () {
        function Thing() {
            this.arms = 4;
            this.legs = 8;
            this.heads = 2;
        }

        Thing.prototype.limbs = function () {
            return 12;
        };
        Thing.prototype.tails = 1;
        return [new Thing()];
    },

    mapKeys2: function (obj) {
        return [obj, function (value, key) {
            return key + value;
        }];
    },

    mapValues1: function (obj) {
        return [obj, function (o) {
            return o.vmax;
        }];
    },

    mapValues2: function (obj) {
        return [obj, 'name'];
    },

    merge: function () {
        var obj1 = {
            data: [
                {owner: 'Adam'},
                {owner: 'Tom'},
                {owner: 'John'}
            ]
        };

        var obj2 = {
            data: [
                {cats: 3},
                {dogs: 5},
                {ostrich: 1}
            ]
        };
        return [obj1,obj2];
    },

    mergeWith: function () {
        var obj1 = {
            website: [
                'blog'
            ],
            technique: ['HTML5']
        };

        var obj2 = {
            website: ['shop'],
            technique: ['xHTML']
        };
        var fn = function(objValue, srcValue){
            return objValue.concat(srcValue);
        };
        return [obj1,obj2,fn];
    },

    omit1: function (obj) {
        return [obj,'number1'];
    },

    omit2: function (obj) {
        return [obj, ['number2','number3']];
    },

    omitBy: function (obj, filter) {
        return [obj,filter];
    },

    pick1: function () {
        var obj = { 'red' : 1, 'yellow': 4, 'blue' : 2};
        return [obj, ['red','yellow']];
    },

    pick2: function () {
        var obj = { 'red' : 1, 'yellow': 4, 'green' : 2};
        return [obj, 'green'];
    },

    pickBy: function () {
        var obj = {
            'x': 16, 'y' : 'sdfs'
        };
        return [obj, _.isNumber];
    },

    result1: function (obj) {
        return [obj, 'exercises.tasks[2].thirdTask'];
    },

    result2: function (obj) {
        return [obj, ['exercises','tasks','2','thirdTask']];
    },

    result3: function (obj) {
        return [obj, 'exercises.tasks[2].thirdTasks', 'default value'];
    },

    result4: function (obj) {
        return [obj, 'exercises.tasks[2].thirdTas', _.constant('default value')];
    },

    set1: function () {
        var obj = {
            'rectangle': [{
                'rect1': {
                    'width': 4,
                    'height': 4
                },
                'rect2': {
                    'width': 6,
                    'height': 6
                }
            }]
        };
        return [obj, 'rectangle[0].rect1.height',8];
    },

    set2: function () {
        var obj = {
            'rectangle': [{
                'rect1': {
                    'width': 4,
                    'height': 4
                },
                'rect2': {
                    'width': 6,
                    'height': 6
                }
            }]
        };
        return [obj, ['rectangle','0','rect1','height'],8];
    },

    setWith: function () {
        var object = {};
        return [object, '[num]',7,Object];
    },

    toPairs: function () {
        function Foo() {
            this.apple = 'green';
            this.banana = 'yellow';
        }

        Foo.prototype.cherry = 'red';
        return [new Foo()];
    },

    toPairsIn: function () {
        function Foo() {
            this.weight = 0.2;
        }

        Foo.prototype.eatable = true;
        return [new Foo()];
    },

    transform1: function () {
        return [[2,3,4,5,7], function(accu,val){
            if(val % 2 !== 0) {
                accu.push(val.toString());
            }
            return accu;
        },[]];
    },

    transform2: function () {
        return [{'width': 5, 'weight':10, 'height':600}, function(result,value,key){
            (result[value] || (result[value] = [])).push(key);
        },{}];
    },

    unset1: function () {
        var obj = {
            'rectangle': [{
                'square': {
                    'width': 4,
                    'height': 4
                },
                'rect2': {
                    'width': 6,
                    'height': 6
                }
            }]
        };
        return [obj, 'rectangle[0].square.height'];
    },

    unset2: function () {
        var obj = {
            'triangle': [{
                'deminsions': {
                    'd': 5,
                    'h': 4
                },
                'rect2': {
                    'width': 6,
                    'height': 6
                }
            }]
        };
        return [obj, ['triangle','0','deminsions','d']];
    },

    update: function () {
        var obj = {
            'rectangle': [{
                'rect1': {
                    'width': 4,
                    'height': 4
                }
            }]
        };
        return [obj, 'rectangle[0].rect1.height',function(n){ return n*2;}];
    },

    updateWith: function () {
        var obj = {
            'rectangle': [{
                'rect2': {
                    'width': 4,
                    'height': 4
                }
            }]
        };
        return [obj, 'rectangle[0].rect2.height', function(n){ return n*3;}];
    },

    values: function () {
        function Foo() {
            this.a = null;
            this.b = 2;
        }

        Foo.prototype.c = '3';
        return [new Foo()];
    },

    valuesIn: function () {
        function Foo() {
            this.a = 6;
        }

        Foo.prototype.c = 7;
        return [new Foo()];
    }
};
