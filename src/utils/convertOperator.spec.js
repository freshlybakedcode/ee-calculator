import { convertOperator } from './convertOperator';

describe('convertOperator() function', () => {
  it('should return `*` when presented with `×`', () =>
    expect(convertOperator('×')).toBe('*'));
  it('should return `/` when presented with `÷`', () =>
    expect(convertOperator('÷')).toBe('/'));
});
