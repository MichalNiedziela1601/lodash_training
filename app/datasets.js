'use strict';
var _ = require('lodash');
module.exports = {

    assign: function ()
    {
        function Bar(){
            this.number = 6;
            this.string = 'default';
        }

        Bar.prototype.square = 36;
        return [{number: 5, square: 25, ping: function() { return 'Number: '+this.number;},
            pong: function() {return 'Number: '+this.square;}}, new Bar() ];
    },

    //alias _.extend
    assignIn: function ()
    {
        var obj = {
            number: 5, square: function ()
            {
                return 'Square: ' + Math.pow('a', 2);
            }
        };
        function Bar(){
            this.number = 4;
            this.cube = 64;
        }

        Bar.prototype.square = function(){
            return 'Square: '+Math.pow('b', 2);
        };
        Bar.prototype.fourthPower = 256;
        return [obj, new Bar()];
    },

    at1: function (obj)
    {
        return [obj, ['book[0].other.pages','book[0].count']];
    },

    at2: function ()
    {
        var obj = {
            0: 'mate',
        1: 'companion',
        2: 'fellow',
        3: 'worker',
        4: 'friend',
        5: 'helper'};
        return [obj, ['0','4']];
    },

    defaults: function ()
    {
        return [{name: 'John',surname: 'Smith',age: 25},
            {name: 'Tom', gender: 'male'}, {surname: 'Twist'}];
    },

    defaultsDeep: function ()
    {
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
                lengthText: function(){
                    return this.text.length;
                }
            }
        };
        return [obj,obj2];
    },

    findKey1: function (obj)
    {
        return [obj, function(o){return o.number > 20;}];
    },

    findKey2: function (obj)
    {
        var obj2 = {number: 15};
        return [obj, obj2];
    },

    findKey3: function (obj)
    {
        return [obj,['number', 20]];
    },

    findKey4: function (obj)
    {
        return [obj, 'number'];
    },

    findLastKey1: function (obj)
    {
        return [obj, function(o){ return o.pizza === true;}];
    },

    findLastKey2: function (obj)
    {
        return [obj, { lasagne: false}];
    },

    findLastKey3: function (obj)
    {
        return [obj, ['pasta', true]];
    },

    findLastKey4: function (obj)
    {
        return [obj, 'pizza'];
    },

    forIn: function ()
    {
        function Foo(){
            this.arms = 2;
            this.legs = 2;
        }
        Foo.prototype.head = 1;
        return [new Foo(), function(val, key, obj){
            console.log(obj);
            obj[key] = val*val;
            return obj[key];
        }];
    },

    forInRight: function ()
    {function Foo(){
        this.arms = 2;
        this.legs = 2;
    }
        Foo.prototype.head = 1;
        function fn(val,key,obj){
            obj[key] = val*2;
            return obj[key];
        }

        return [new Foo(), fn];
    },

    forOwn: function ()
    {
        function Foo(){
            this.r = 7;
            this.d = 14;
        }
        Foo.prototype.l = 4.4;
        function fn(val,key,obj){
            if(key === 'r'){
                obj[key] = val+1;
                return obj[key];
            }
        }
        return [new Foo(),fn];
    },

    forOwnRight: function ()
    {
        function Foo(){
            this.r = 7;
            this.d = 14;
        }
        Foo.prototype.l = 4.4;
        function fn(val,key,obj){
            if(key === 'r'){
                obj[key] = val+1;
                return obj[key];
            }
        }
        return [new Foo(), fn];
    },

    functions: function ()
    {
        function Foo(){
            this.square = _.constant(4);
        }

        return [new Foo()];
    },

    functionsIn: function ()
    {
        function Foo(){
            this.square = _.constant(4);
        }

        Foo.prototype.cube = function ()
        {
        };
        return [new Foo()];
    },

    get1: function (obj)
    {
        return [];
    },

    get2: function (obj)
    {
        return [];
    },

    get3: function (obj)
    {
        return [];
    },

    has1: function ()
    {
        return [];
    },

    has2: function ()
    {
        return [];
    },

    hasIn1: function ()
    {
        return [];
    },

    hasIn2: function ()
    {
        return [];
    },

    invert: function (obj1)
    {
        return [];
    },

    invertBy1: function (obj1)
    {
        return [];
    },

    invertBy2: function (obj)
    {
        return [];
    },

    invoke1: function (obj)
    {
        return [];
    },

    invoke2: function (obj)
    {
        return [];
    },

    keys: function ()
    {
        return [];
    },

    keysIn: function ()
    {
        return [];
    },

    mapKeys2: function (obj)
    {
        return [];
    },

    mapValues1: function (obj)
    {
        return [];
    },

    mapValues2: function (obj)
    {
        return [];
    },

    merge: function ()
    {
        return [];
    },

    mergeWith: function ()
    {
        return [];
    },

    omit1: function (obj)
    {
        return [];
    },

    omit2: function (obj)
    {
        return [];
    },

    omitBy: function (obj, filter)
    {
        return [];
    },

    pick1: function ()
    {
        return [];
    },

    pick2: function ()
    {
        return [];
    },

    pickBy: function ()
    {
        return [];
    },

    result1: function (obj)
    {
        return [];
    },

    result2: function (obj)
    {
        return [];
    },

    result3: function (obj)
    {
        return [];
    },

    result4: function (obj)
    {
        return [];
    },

    set1: function ()
    {
        return [];
    },

    set2: function ()
    {
        return [];
    },

    setWith: function ()
    {
        return [];
    },

    toPairs: function ()
    {
        return [];
    },

    toPairsIn: function ()
    {
        return [];
    },

    transform1: function ()
    {
        return [];
    },

    transform2: function ()
    {
        return [];
    },

    unset1: function ()
    {
        return [];
    },

    unset2: function ()
    {
        return [];
    },

    update: function ()
    {
        return [];
    },

    updateWith: function ()
    {
        return [];
    },

    values: function ()
    {
        return [];
    },

    valuesIn: function ()
    {
        return [];
    }
};
