function FizzBuzz() {
    this.play = function(number) {
	if (number % 3 === 0)
	    return "fizz";
	else
	    return number;
    };
}
