'use strict';

var chai = require("chai");
var assert = chai.assert;
chai.should();

var bubbleSort = require("../../Sort/BubbleSort");

describe("BubbleSort", function () {
    it("should throw exception when input parameter is not array", function () {
        assert.throws(function () { bubbleSort.sort("foo"); })
    });

    it("should be [1,2,3] when input is [3,2,1]", function () {
        bubbleSort.sort([3, 2, 1]).should.eql([1, 2, 3]);
    });

    it("should be [-3,-2,-1,0,1,2] when input is [2,1,0,-2,-1,-3]", function () {
        bubbleSort.sort([2, 1, 0, -2, -1, -3]).should.eql([-3, -2, -1, 0, 1, 2])
    });
})