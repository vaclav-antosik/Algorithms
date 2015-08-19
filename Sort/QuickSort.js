'use strict';

var guard = require("../Guard");
var helpers = require("../Helpers")

function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    
    var pIndex = sortToHalfs(arr, start, end);
    
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end);
}

function sortToHalfs(arr, start, end) {
    var wallIndex = 0;
    for (var i = 0; i < end; i++) {
        if (arr[i] <= arr[end]) {
            swap(arr, i, wallIndex);
            wallIndex++;
        }
    }
    swap(arr, end, wallIndex);
    
    return wallIndex;
}

function swap(arr, a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

function sort(input) {
    guard.isArray(input);
    
    var startTime = process.hrtime();
    
    quickSort(input, 0, input.length - 1);

    helpers.writeTime(startTime);
    
    return input;
}

module.exports.sort = sort;