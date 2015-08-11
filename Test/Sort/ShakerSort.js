'use strict'

var chai = require("chai");
var assert = chai.assert;
chai.should();

var shakerSort = require("../../Sort/ShakerSort");

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
});