'use strict';

var generator = require("./Test/GenerateSortTestFile");

generator.generateSortTestFile("./Test/!TestData/big.json", "sort.json");

console.log("done");