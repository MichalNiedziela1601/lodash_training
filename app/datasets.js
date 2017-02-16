'use strict';
var _ = require('lodash');
var generator = require('../test/unit/Generator');
module.exports = {
    countBy: function ()
    {
        return [[1, 2, 6, 6, 7, 2.4, 7.5, 7.6], Math.floor];
    }, countBy2: function ()
    {

        return [['bbb', 'bbb', 'bbbb', 'bbbb', 'bbbb', 'bbbbb'], 'length'];
    }, every: function ()
    {

        return [[{bb: 'bb', ALIVE: true}, {bb: 'bb', ALIVE: true}, {bb: 'bb', ALIVE: true}], 'ALIVE'];
    }, every2: function ()
    {

        return [[true, 1, 'yes', {a: true}], Boolean];
    }, filter: function ()
    {
        var users = [{name: 'Ali', age: 33, active: false}, {name: 'Kali', age: 21, active: true}, {user: 'bob', age: 41, active: true},
            {user: 'bob', age: 55, active: true}, {user: 'bob', age: 66, active: true}];
        return [users, function (o)
        {
            return o.age < 40 ? o.age : false
        }];
    }, filter2: function ()
    {
        var users = [{name: 'One', amount: 10, available: true, type: 'zxc'}, {name: 'Two', amount: 90, available: true, type: 'oidfs'},
            {name: 'Bow', amount: 23, available: true, type: 'RANGE'}, {name: 'Sword', amount: 23, available: true, type: 'MELEE'},
            {name: 'GUN', amount: 23, available: true, type: 'RANGE'}];
        return [users, {available: true, amount: 23}];
    }, filter3: function ()
    {
        var arr = {
            C4: {explosionPower: 999, throwable: false},
            Grenade: {explosionPower: 212, throwable: true},
            Molotov: {explosionPower: 150, throwable: true},
            BOMB: {explosionPower: 550, throwable: false},
            Sheep: {explosionPower: 0, throwable: false}
        };
        return [arr, ['throwable', true]];
    }, filter4: function ()
    {
        var arr = {
            C4: {explosionPower: 999, throwable: false},
            Grenade: {explosionPower: 212, throwable: true},
            Molotov: {explosionPower: 150, throwable: true},
            BOMB: {explosionPower: 550, throwable: false},
            Sheep: {explosionPower: 0, throwable: false}
        };
        return [arr, 'explosionPower'];
    }, find: function ()
    {
        var testArray = _.fill(new Array(50), 1).map(function ()
        {
            if (Math.random() < 0.2) {
                return {name: 'Kodi', age: 12, active: true};
            } else if (Math.random() < 0.4) {
                return {name: 'Olaf', age: 32, active: false};
            } else if (Math.random() < 0.45) {
                return {name: 'Helen', age: 65, active: true};
            } else if (Math.random() < 0.8) {
                return {name: 'Pluto', age: 25, active: false};
            } else {
                return {name: 'Rudi', age: 43, active: true};
            }
        });

        var predicate = {
            age: 65
        };

        return [testArray, predicate];
    }, find2: function ()
    {
        var users = [{
            NAME: 'Rudi', age: 15, active: true, gender: 'M'
        }, {

            NAME: 'Bob', age: 25, active: true, gender: 'M'
        }, {

            NAME: 'Rafi', age: 35, active: true, gender: 'M'
        }];
        return [users, 'NAME'];
    }, find3: function ()
    {
        var obj = {
            key1: {code: 'W4q374QJ1sIJKD7QM1hW2'}, key2: {code: 'SbK9WMQJ-2AA2S2Dio317iD'}, key3: {code: '5oab241bwSKw'}, key4: {code: 'wA7De2soWq5DJ99Mq75'}
        };
        var fn = function (o)
        {

            return o.code.length > 22 ? o : null;
        };

        return [obj, fn];
    }, find4: function ()
    {
        var users = [{nickName: 'Dragon', VIP: true, points: 212, age: 20}, {nickName: 'Demon', VIP: false, points: 12, age: 20},
            {nickName: 'Eragon', VIP: true, points: 212, age: 20}, {nickName: 'Pino', VIP: true, points: 111, age: 10},
            {nickName: 'Fallen', VIP: true, points: 212, age: 20}];

        return [users, ['nickName', 'Eragon']];
    }, groupBy: function ()
    {
        var array = [3, 4, 9, 121, 16, 26, 82];
        var fun = function (val)
        {
            if (val % 2 === 0) {
                return Math.sqrt(val);
            } else {
                return val
            }
        };
        return [array, fun];
    }, groupBy2: function ()
    {
        var array = ['xyz', 'xyz', 'combi', 2, 4, 5];
        return [array, 'length'];
    }, includes: function ()
    {

        return [{firstName: 'Woj', lastName: 'jakis', users: 5001, running: true}, ['Woj', 'ja']];
    }, includes2: function ()
    {
        var array = ['destabli', 'astabis', 'onassstabli', 'antidisestablishmentarianism'];
        return [array, 'stabli'];
    }, includes3: function ()
    {
        var array = [1, true, 3, 'wood', 4, 2, false, true, 'wood'];
        return [array, 'wood', 4];
    }, map: function ()
    {
        var testArray = [{user: 'Bob'}, {user: 'Bob'}, {user: 'Bob'}, {user: 'Bob'}, {user: 'Bob'}, {user: 'Bob'}, {user: 'Bob'}, {user: 'Bob'}, {user: 'Bob'},
            {user: 'Bobby'}];
        return [testArray, 'user'];
    }, map2: function ()
    {
        var testArray = [1, 2, 3, 4, 5, 6];
        var fun = function (o)
        {
            if (typeof o === 'number') {
                if (o % 2 === 0) {
                    return o * o;
                } else {
                    return o + 1;
                }
            } else {
                return false;
            }
        };
        return [testArray, fun];
    }, partition: function ()
    {


        var users2 = [{name: 'LadyM', age: 10, status: {membership: 'Deluxe', newOne: true}},
            {name: 'Powpo', age: 22, status: {membership: 'VIP', newOne: false}}, {name: 'Lamia', age: 27, status: {membership: 'Normal', newOne: false}},
            {name: 'Scale', age: 69, status: {membership: 'VIP', newOne: true}}];


        return [users2, function (o)
        {
            return o.status.newOne;
        }];
    },

    partition2: function ()
    {
        var users = [{name: 'Andrinio', age: 36, active: false}, {name: 'Harry', age: 40, active: true}, {name: 'Kodi', age: 1, active: false},
            {name: 'Francheska', age: 61, active: true}];
        return [users, 'name'];
    },


    partition3: function ()
    {
        var users = {
            user1: {age: 39}, use2: {age: 43}, userb3: {age: 11}, use: {age: 45}, useraa5: {age: -8}
        };
        return [users, function (o)
        {
            if (o.age < 40) {
                o.age += 10;
                return o.age;
            }
        }];
    }, reduce: function ()
    {

        var tArray = [1, 2, 3, 4, 5];
        var fn = function (accu, val)
        {
            return accu + (val * val);
        };

        return [tArray, fn, 0];
    }, reduce2: function ()
    {
        var obj = {name: 'Ala', pet: 'Cat', age: 'Young'};
        var fun = function (accu, val)
        {
            accu += val;
            return accu;
        };

        return [obj, fun];
    },

    sortBy: function ()
    {
var array = ['blab','bl','blabla','mananaqwer','manamana','man'];
        return [array, 'length'];
    },

    sortBy2: function ()
    {
        var data = [
            {login: 'Kooa', pass: 1234, tickets: 22, date: '05-11-16'},
            {login: 'Allu', pass: 2391, tickets: 5, date: '12-11-16'},
            {login: 'Demon', pass: 2342, tickets: 3, date: '17-10-16'},
            {login: 'Koasow', pass: 1234, tickets: 10, date: '06-11-16'},
            {login: 'Bausa', pass: 2184, tickets: 5, date: '10-11-16'},
            {login: 'Zaodi', pass: 7431, tickets: 11, date: '15-11-16'},
            {login: 'Butoiw', pass: 1234, tickets: 10, date: '09-11-16'},
            {login: 'Abero', pass: 2184, tickets: 10, date: '02-11-16'}
        ];

        return [data, ['pass','tickets','login']];
    }, sortBy3: function (data)
    {
        return [data, {pass: 1234, tickets: 10}];
    }, sortBy4: function (data)
    {
        var func = function(val){
            return val.pass + val.tickets;
        };
        return [data,func];
    }
};
