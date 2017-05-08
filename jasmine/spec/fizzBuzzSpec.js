/* global describe, it, expect */
describe('Fizzbuzz', function () {
  var fizzBuzz = require('../src/fizzBuzz');

  it('Returns 1 when passed 1', function () {
    expect(fizzBuzz(1)).toEqual(1)
  })
})
