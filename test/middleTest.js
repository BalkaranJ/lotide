const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {
  it("should return the middle of the array", () => {
    assert.strictEqual(assertArraysEqual(middle([1]), []));
    assert.strictEqual(assertArraysEqual(middle([1, 2]), []));
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2]));
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
  });
});
