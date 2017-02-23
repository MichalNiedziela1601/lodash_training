'use strict';
var _ = require('lodash');

module.exports = {

    attempt: function(){
        var fun = function(num){
            if(num > 0){
                return num;
            }
        };
        return[fun,3];
    },

    conforms: function(){
        var obj = {'temperature': function(n) {return n < 3;}};
        return [obj];
    },

    constant: function(){
        return[{John: 20, 'active': true}];
    },

    flow: function(){
        return [_.add, function(n){return n*n;}];
    },

    flowRight: function(){
      return [function(n){return n*2;}, _.multiply];
    },

    identity: function(){
        return[{elem1: 35, elem2: true}];
    },

    matches: function () {

           var objects = { 'number': 1, 'pass': true};
        return [objects];
    },

    matchesProperty: function () {
        return ['type','banana'];
    },

    method: function() {
        return['a.b'];
    },

    methodOf: function() {
        return[{a: {b: _.constant(5)}}];
    },

    noop: function(){
        return[{number: 5, square: 25}];
    },

    nthArg1: function(){
        return[2];
    },

    nthArg2: function(){
        return[-1];
    },

    over1: function(){
        return[[_.floor, Math.sqrt]];
    },

    over2: function(){
        return[Math.abs];
    },

    over3: function(){
        return[[Math.max, Math.min]];
    },

    overEvery1: function(){
        return[[Boolean, _.isNumber]];
    },

    overEvery2: function(){
        return[_.isString];
    },

    overSome1: function(){
        return[[function(n) { return n%10 === 0;},function(n){ return n%3 === 0 || n%10 === 0;}]];
    },

    overSome2: function(){
        return[[Boolean, isFinite]];
    },

    property1: function(){
        return['a.b'];
    },

    property2: function(){
        return[['c','d']];
    },

    propertyOf1: function(){
        var arr =  [12,3,15,30,37,5];
        return[{number1:arr ,number2: arr, number3: arr}];
    },

    propertyOf2: function(){
        var arr =  [12,3,15,30,37,5];
        return[{number1:arr ,number2: arr, number3: arr}];
    },

    range1: function(){
        return[6];
    },

    range2: function(){
        return[5,9];
    },

    range3: function(){
        return[-10,-15,-1];
    },

    rangeRight1: function(){
        return[5];
    },

    rangeRight2: function(){
        return[3,10];
    },

    rangeRight3: function(){
        return[2,12,2];
    },

    times: function(){
        return[5, function(n){
            return n*n;
        }];
    },

    toPath: function(){
        return['a.b.c[4]'];
    }
};
