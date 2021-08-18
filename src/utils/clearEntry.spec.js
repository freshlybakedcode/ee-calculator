import { clearEntry } from './clearEntry';

const largeSum = '145+256+367+478-589/691*723';
const smallSum = '1+2';
const nothingRequired = '1*';

describe('clearEntry() function', () => {
  it('should clear any digits following the last mathmatical operator', () => {
    expect(clearEntry(largeSum)).toBe('145+256+367+478-589/691*');
    expect(clearEntry(smallSum)).toBe('1+');
    expect(clearEntry(nothingRequired)).toBe('1*');
  });
});
