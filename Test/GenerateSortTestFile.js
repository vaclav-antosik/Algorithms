// Use http://www.json-generator.com/ to generate input file
//
// Example template for the input file:
// {
//     unsorted: ['{{repeat(100000)}}', '{{integer(1,10)}}']
// }

'use strict';

var fs = require('fs');

function generateSortTestFile(inputFilePath, newFilePath) {
    
    console.log("Loading file: " + inputFilePath);
    
    var obj = JSON.parse(fs.readFileSync(inputFilePath, 'utf8'));
    
    console.log("Sorting array");
    
    var arr = obj.unsorted.slice();
    
    function sortNumber(a, b) {
        return a - b;
    }
    
    arr.sort(sortNumber);
    
    obj.sorted = arr;
    
    var json = JSON.stringify(obj);
    
    console.log("Saving output file: " + newFilePath);
    
    fs.writeFile(newFilePath, json, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("The file was saved!");
    });
}

module.exports.generateSortTestFile = generateSortTestFile;