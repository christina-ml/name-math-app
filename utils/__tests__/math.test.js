// import isEvenlyDivisibleBy from "../math";
const isEvenlyDivisibleBy = require('../math');

describe('returns true if a first num is evenly divisible by a second num', () => {
  it('handles two positive numbers', () => {
    expect(isEvenlyDivisibleBy(4,2)).toBe(true);
    expect(isEvenlyDivisibleBy(5,2)).toBe(false);
  })
});