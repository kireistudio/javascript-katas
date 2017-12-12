import { getFizzBuzz } from '../../src/fizzbuzz/fizzbuzz'
var assert = require('chai').assert

describe('print()', function() {

  it('should return 1 when the value is 1', function() {
    var result =  getFizzBuzz(1);
    assert.equal('1', result);
  });

  it('should return 2 when the value is 2', function() {
    var result =  getFizzBuzz(2);
    assert.equal('2', result);
  });

  it('should return Fizz when the value is 3', function() {
    var result =  getFizzBuzz(3);
    assert.equal('Fizz', result);
  });

  it('should return 4 when the value is 4', function() {
    var result =  getFizzBuzz(4);
    assert.equal('4', result);
  });

  it('should return Buzz when the value is 5', function() {
    var result =  getFizzBuzz(5);
    assert.equal('Buzz', result);
  });

  it('should return Fizz when the value is 6', function() {
    var result =  getFizzBuzz(6);
    assert.equal('Fizz', result);
  });

  it('should return Fizz when the value is 9', function() {
    var result =  getFizzBuzz(9);
    assert.equal('Fizz', result);
  });

  it('should return Buzz when the value is 10', function() {
    var result =  getFizzBuzz(10);
    assert.equal('Buzz', result);
  });

  it('should return FizzBuzz when the value is 15', function() {
    var result =  getFizzBuzz(15);
    assert.equal('FizzBuzz', result);
  });
  
});