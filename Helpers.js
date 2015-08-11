'use strict'

function writeTime(startTime) {
    var precision = 3; 
    var elapsed = process.hrtime(startTime)[1] / 1000000; 
    console.log("Execution time: " + process.hrtime(startTime)[0] + " s, " + elapsed.toFixed(precision) + " ms");
}

module.exports.writeTime = writeTime;