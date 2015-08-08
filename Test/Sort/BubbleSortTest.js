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
})