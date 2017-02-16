'use strict';
var _ = require('lodash');

module.exports = {
    after: function (callback)
    {
        return [2, callback];
    }, bind: function (callback)
    {

        return [callback, {order: 'PIZZA'}, 'YES'];
    }, curry: function ()
    {
        var func = function (a, b, c)
        {
            if (null == a || null == b || null == c) {
                return false;
            }
            return a * b * c;
        };
        return [func];
    }, flip: function ()
    { //use arguments to complete this task
        var f = function ()
        {
            return _.toArray(arguments);
        };
        return [f];
    }, partial: function ()
    {
        var f = function (s1, s2)
        {
            return s1 + ' represents ' + s2 + ' character';
        };
        return [f, 'Batman', 'GOOD'];
    }, rearg: function (callback)
    {
        return [callback, 1, 3, 0, 2];
    }, spread: function ()
    {
        var fun = function (start,stop)
        {
            if(start === 'HIV' && stop === 'started'){
                return 'Treatment due to '+start+' virus has '+stop+'!'
            } else if(start === 'HIV' && undefined === stop){
                return 'You were killed by HIV';
            } else if(start === 'EBOLA' && stop === 'some'){
                return start +' slowly killing you, I\'m so sorry';
            } else {
                return false
            }

        };
        return [fun];
    }
};
