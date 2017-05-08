describe('FizzBuzz', function () {
    var fizzBuzz;

    beforeEach(function() {
	fizzBuzz = new FizzBuzz();
    });

    describe('play', function () {
	it('Returns 1 when passed 1', function () {
	    expect(fizzBuzz.play(1)).toEqual(1); 
	});

	it('Returns 2 when passed 2', function() {
	    expect(fizzBuzz.play(2)).toEqual(2);
	});

	it('Returns "fizz" when passed 3', function() {
	    expect(fizzBuzz.play(3)).toEqual("fizz");
	});

	it('Returns 4 when passed 4', function() {
	    expect(fizzBuzz.play(4)).toEqual(4);
	});
    });
});
