const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should not modify length of original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.strictEqual(words.length, 3);
  });
});