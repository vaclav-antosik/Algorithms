'use strict';

//var generator = require("./Test/GenerateSortTestFile");

//generator.generateSortTestFile("./Test/!TestData/big.json", "sort.json");

var quickSort = require("./Sort/QuickSort");

var result = quickSort.sort([0, 3, 3, 2, 2, 0]);

console.log("done");