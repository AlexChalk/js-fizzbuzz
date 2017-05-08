describe('Fizzbuzz', function() {
  it("Prints the numbers 1 to 100"), function() {
    var list = [];
    for (var i = 1; i <= 100; i++) {
        list.push(i);
}
    expect(list).toContain(fizzBuzz());
}
});
