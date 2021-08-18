import { evaluateSum } from './evaluateSum';

describe('evaluateSum() function', () => {
  it('should be able to solve equations', () => {
    expect(evaluateSum('1+2')).toBe('3');
  });
  it('should return a string, not a number', () => {
    expect(typeof evaluateSum('6*6')).toBe('string');
  });
  it('should be able to resolve floating point errors', () => {
    expect(evaluateSum('0.2*0.1')).toBe('0.02');
    expect(evaluateSum('0.82-0.02')).toBe('0.8');
  });
  it('should show ten decimal places', () => {
    expect(evaluateSum('10/3')).toBe('3.3333333333');
  });
});
