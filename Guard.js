'use strict';

function isArray(parameter) {
    if (parameter.constructor!== Array) {
        throw "Array type required!";
    }
}

module.exports.isArray = isArray;