'use strict';

var guard = require("../Guard");
var helpers = require("../Helpers")

function sort(input) {
    guard.isArray(input);
    
    var startTime = process.hrtime();
    
    var inputLength = input.length;
    var currentIndex = inputLength - 1;
    for (var iter = 0; iter < inputLength; iter++) {
        var maxNumber = null;
        var maxNumberIndex = -1;
        for (var i = 0; i <= currentIndex; i++) {
            if (maxNumber === null || input[i] > maxNumber) {
                maxNumber = input[i];
                maxNumberIndex = i;
            }
        }

        var tmp = input[currentIndex];
        input[currentIndex] = input[maxNumberIndex];
        input[maxNumberIndex] = tmp;

        currentIndex--;
    }
    
    helpers.writeTime(startTime);
    
    return input;
}

module.exports.sort = sort;