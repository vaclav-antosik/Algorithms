'use strict'

var guard = require("../Guard");
var helpers = require("../Helpers")

function sort(input) {
    guard.isArray(input);
    
    var startTime = process.hrtime();

    var inputLength = input.length;

    for (var iterationIndex = 1; iterationIndex <= inputLength / 2; iterationIndex++) {

        for (var rightIndex = 0; rightIndex < inputLength - iterationIndex; rightIndex++) {
            if (input[rightIndex] > input[rightIndex + 1]) {
                var tmp = input[rightIndex];
                input[rightIndex] = input[rightIndex + 1];
                input[rightIndex + 1] = tmp;
            }
        }

        for (var leftIndex = inputLength - 1 - iterationIndex; leftIndex >= iterationIndex; leftIndex--) {
            if (input[leftIndex] < input[leftIndex - 1]) {
                var tmp = input[leftIndex];
                input[leftIndex] = input[leftIndex - 1];
                input[leftIndex - 1] = tmp;
            }
        }

    }
    
    helpers.writeTime(startTime);

    return input;
}

module.exports.sort = sort;