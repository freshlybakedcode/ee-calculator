import { isMathmaticalOperator } from './isMathmaticalOperator';

describe('isMathmaticalOperator() function', () => {
  it('should return `true` if it receives a mathmatical operator (+ - * /)', () => {
    expect(isMathmaticalOperator('+')).toBeTruthy();
    expect(isMathmaticalOperator('-')).toBeTruthy();
    expect(isMathmaticalOperator('/')).toBeTruthy();
    expect(isMathmaticalOperator('*')).toBeTruthy();
  });
  it('should return `false` if it receives anything else)', () => {
    expect(isMathmaticalOperator('1')).toBeFalsy();
    expect(isMathmaticalOperator('a')).toBeFalsy();
    expect(isMathmaticalOperator('@')).toBeFalsy();
    expect(isMathmaticalOperator('§')).toBeFalsy();
  });
});
