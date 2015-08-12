'use strict'

var fs = require('fs');
var chai = require("chai");
var assert = chai.assert;
chai.should();

var shakerSort = require("../../Sort/ShakerSort");
var testSet = JSON.parse(fs.readFileSync("./Test/!TestData/sort.json", 'utf8'));

describe("ShakerSort", function () {
    it("should throw exception when input parameter is not array", function () {
        assert.throw(function () { shakerSort.sort("foo"); });
    })

    it("should be [1,2,3] when input is [3,2,1]", function () {
        shakerSort.sort([3, 2, 1]).should.eql([1, 2, 3]);
    })

    it("should be [-3,-2,-1,0,1,2] when input is [2,1,0,-2,-1,-3]", function () {
        shakerSort.sort([2, 1, 0, -2, -1, -3]).should.eql([-3, -2, -1, 0, 1, 2])
    });

    it("should equal to the big test set", function () {
        this.timeout(15000);
        shakerSort.sort(testSet.unsorted).should.eql(testSet.sorted);
    });
});