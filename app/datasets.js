'use strict';

module.exports = {

    camelCase: function ()
    {
        return ['Some String To Test Function'];
    },
    capitalize: function ()
    {
        return ['sOME STRING TO TEST FUNCTION'];
    },
    deburr: function ()
    {
        return ['som\u00E8 string to test function'];
    },
    endsWith: function ()
    {
        return ['abs','b',2];
    },
    escape: function ()
    {
        return ['Tom & Jerry are old friends'];
    },
    escapeRegExp: function ()
    {
        return ['[realskill](https://realskill.com/)'];
    },
    kebabCase: function ()
    {
        return ['Some String to test function'];
    },
    lowerCase: function ()
    {
        return ['SOME STRING TO TEST FUNCTION'];
    },
    lowerFirst: function ()
    {
        return ['SOME STRING TO TEST FUNCTION'];
    },
    pad: function ()
    {
        return ['some long sweet text',30,'._'];
    },
    padEnd: function ()
    {
        return ['some another long sweet text',36,'.*'];
    },
    padStart: function ()
    {
        return ['try again some long sweet text',42,'|_'];
    },
    parseInt: function ()
    {
        return ['8'];
    },
    repeat: function ()
    {
        return ['repeat me!',4];
    },
    replace1: function ()
    {
        return ['Hello World','World','universe!'];
    },
    replace2: function ()
    {
        return ['Hello Universe', /Universe/, 'world!'];
    },
    replace3: function ()
    {
        return ['Hello Universe','Universe', function() { return 'world!';}];
    },
    replace4: function ()
    {
        return ['Hello Universe', /Universe/, function() { return 'world!';}];
    },
    snakeCase: function ()
    {
        return ['Some string to test function'];
    },
    split: function ()
    {
        return ['split-me','-',2];
    },
    startCase: function ()
    {
        return ['some string to test function'];
    },
    startsWith: function ()
    {
        return ['abc','a',0];
    },
    template: function ()
    {
        return ['hi <%= data.user %>!', { 'variable': 'data' }];
    },
    toLower: function ()
    {
        return ['Some string to test function'];
    },
    toUpper: function ()
    {
        return ['Some string to test function'];
    },
    trim: function ()
    {
        return ['    some string to test function', ' '];
    },
    trimEnd: function ()
    {
        return ['some string to test    ',' '];
    },
    trimStart: function ()
    {
        return ['    some string to test function.....', ' '];
    },
    truncate: function ()
    {
        return ['some very long text, sdfe dsfsfsd',{
            'length' : 24,
            'separator': /,? +/,
            'omission' : '...'
        }];
    },
    unescape: function ()
    {
        return ['tom &amp; jerry were old friends'];
    },
    upperCase: function ()
    {
        return ['some string to test function'];
    },
    upperFirst: function ()
    {
        return ['some string to test function'];
    },
    words1: function ()
    {
        return ['bread, butter, milk'];
    },
    words2: function ()
    {
        return ['bread, butter, milk', /[^, ]+/g];
    }
};
