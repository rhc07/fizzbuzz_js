// require('fizzBuzz');

describe("FizzBuzz", function() {

  it('returns fizz if number can be divided by 3', function(){
    var fizzBuzz = new FizzBuzz();

    expect(fizzBuzz.check(3)).toEqual('fizz');
});

  it('returns buzz if number can be divided by 5', function(){
    var fizzBuzz = new FizzBuzz();

    expect(fizzBuzz.check(5)).toEqual('buzz');
});

  it('returns fizzbuzz if number can be divided by 3 and 5', function(){
    var fizzBuzz = new FizzBuzz();

    expect(fizzBuzz.check(15)).toEqual('fizzbuzz');
  });
});
