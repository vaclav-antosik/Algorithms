'use strict';

var fs = require("fs");
var chai = require("chai");
var assert = chai.assert;
chai.should();

var insertionSort = require("../../Sort/InsertionSort");
var testSet = JSON.parse(fs.readFileSync("./Test/!TestData/sort.json", 'utf8'));

describe("-- InsertionSort --", function () {
    it("should throw exception when input parameter is not array", function () {
        assert.throws(function () { insertionSort.sort("foo"); })
    });
    
    it("should be [1,2,3,4,5] when input is [1,2,3,4,5]", function () {
        insertionSort.sort([1, 2, 3, 4, 5]).should.eql([1, 2, 3, 4, 5]);
    });
    
    it("should be [0,0,2,2,3,3] when input is [0,3,3,2,2,0]", function () {
        insertionSort.sort([0, 3, 3, 2, 2, 0]).should.eql([0, 0, 2, 2, 3, 3]);
    });
    
    it("should be [1,2,3] when input is [3,2,1]", function () {
        insertionSort.sort([3, 2, 1]).should.eql([1, 2, 3]);
    });
    
    it("should be [-3,-2,-1,0,1,2] when input is [2,1,0,-2,-1,-3]", function () {
        insertionSort.sort([2, 1, 0, -2, -1, -3]).should.eql([-3, -2, -1, 0, 1, 2]);
    });
    
    it("should equal to the big test set", function () {
        this.timeout(15000);
        insertionSort.sort(testSet.unsorted).should.eql(testSet.sorted);
    });
})