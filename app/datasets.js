'use strict';

module.exports = {

    add: function ()
    {
        return [2,-4];
    },

    ceil: function ()
    {
        return [1.8404,2];
    },

    divide: function ()
    {
        return [Number.MIN_VALUE,0];
    },

    floor: function ()
    {
        return [5.4704,2];
    },

    max: function ()
    {
        return [[1,2,3,4,5]];
    },

    maxBy1: function ()
    {
        return [[{a: 2, b: 1}, {a: 3, b: 3}, {a: 1, b: 1}], function(o) { return [o.a, o.b];} ];
    },

    maxBy2: function ()
    {
        return [[{Name: 'Edwin', Gold: 2500}, {name: 'Artur', Gold: 122}, {Name: 'Baltazar', Gold: 1500}],
            'Name'];
    },

    mean: function ()
    {
        return [[1,3,4,6]];
    },

    meanBy1: function ()
    {
        return [[{n: 30},{n: 27},{n: 24}], function(o){return o.n;}];
    },

    meanBy2: function ()
    {
        return [[{n: 3}, {n: 1}, {n: 2}, {n: 6}], 'n'];
    },

    min: function ()
    {
        return [[9,4,6,-3,-2,0]];
    },

    minBy1: function ()
    {
        return [[{name: 'Adam', age: 33}, {name: 'Justin', age: 21}, {name: 'Baartek', age: 23}],
        function(o) { return o.age;}];
    },

    minBy2: function ()
    {
        return [[{Name: 'Edwin', Gold: 2500}, {Name: 'Bob', Gold: 200}, {Name: 'Baltazar', Gold: 1500}],
        'Gold'];
    },

    multiply: function ()
    {
        return [-3,-5];
    },

    round: function ()
    {
        return [8.2457, 3];
    },

    subtract: function ()
    {
        return [15,0];
    },

    sum: function ()
    {
        return [[1,2,3,4]];
    },

    sumBy1: function ()
    {
        return [[{n: 3000}, {n: 300}, {n: 40.5}], function(o) { return o.n;}];
    },

    sumBy2: function ()
    {
        return [[{n: 100}, {n: 50}, { n: 40}, { n: 3}], 'n'];
    }
};
