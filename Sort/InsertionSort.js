'use strict';

var guard = require("../Guard");
var helpers = require("../Helpers")

function sort(input) {
    guard.isArray(input);
    
    var startTime = process.hrtime();

    var inputLength = input.length;
    
    for (var i = 1; i < inputLength; i++) {
        
        var j = i - 1;
        var tmp = input[i];
        
        while (tmp < input[j] && j >= 0) {
            input[j + 1] = input[j];
            j--;
        }
        input[j+1] = tmp;
    }
    
    helpers.writeTime(startTime);
    
    return input;
}

module.exports.sort = sort;
