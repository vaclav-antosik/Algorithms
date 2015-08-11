'use strict';

var guard = require("../Guard");
var helpers = require("../Helpers")

function sort(input) {
    guard.isArray(input);
    
    var startTime = process.hrtime();

    for (var iCounter = 1, inputLength = input.length; iCounter <= input.length - 1; iCounter++) {
        for (var i = 0, inputLength = input.length; i < input.length - iCounter; i++) {
            if (input[i] > input[i + 1]) {
                var buff = input[i];
                input[i] = input[i + 1];
                input[i + 1] = buff;
            }
        }
    }
    
    var endTime = process.hrtime(startTime);
    helpers.writeTime(startTime);

    return input;
}

module.exports.sort = sort;