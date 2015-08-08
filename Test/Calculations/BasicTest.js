'use strict';

var chai = require("chai").should(), expect = chai.expect;
var basic = require("../../Calculations/Basic");

describe("sum", function () {
    it("should return 2 when a is 1 and b is 1", function () {
        basic.sum(1, 1).should.equal(2);
    })
});