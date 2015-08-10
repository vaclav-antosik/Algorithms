'use strict';

var guard = require("../guard");

function sort(input) {
    guard.isArray(input);
    
    for (var iCounter = 1, inputLength = input.length; iCounter <= input.length - 1; iCounter++) {
        for (var i = 0, inputLength = input.length; i < input.length - iCounter; i++) {
            if (input[i] > input[i + 1]) {
                var buff = input[i];
                input[i] = input[i + 1];
                input[i + 1] = buff;
            }
        }
    }

    return input;
}

module.exports.sort = sort;