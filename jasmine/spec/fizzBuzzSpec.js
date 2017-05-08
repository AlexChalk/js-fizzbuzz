/* global describe, it, expect */
describe('FizzBuzz', function () {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });


  it('Returns 1 when passed 1', function () {
    expect(fizzBuzz.play(1)).toEqual(1)
  })
})
