import { describe } from 'yargs';
import { stringlength } from'./string';
import { reverseString } from './string';
import { calculator } from './string';
import { capitalizeFirst } from './string';

describe('test for string', () => {
  it('returns string length', () => {
    expect(stringlength('hello')).toBe(5);
  })
  it('is at least one character long', () => {
    expect(() => { stringlength('') }).toThrow('String must be at least one character long and not more than 10');
  })
  it('is less than ten characters long', () => {
    expect(() => { stringlength('mynameiskevin') }).toThrow('String must be at least one character long and not more than 10');
  })
});

describe('reverse function', () => {
  it('reverses string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});

const calc = new calculator;

it('sums up', () => {
  expect(calc.add(1,2)).toBe(3);
});
it('subtracts', () => {
  expect(calc.subtract(2,1)).toBe(1);
});
it('divides', () => {
  expect(calc.divide(2,2)).toBe(1);
});
it('multiplies', () => {
  expect(calc.multiply(1,2)).toBe(2);
});

describe('capitalizes first letter', () => {
  it('returns word with first letter capitalized', () => {
    expect(capitalizeFirst('hello')).toBe('Hello');
  });
});