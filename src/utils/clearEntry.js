import { isMathmaticalOperator } from './isMathmaticalOperator';

export const clearEntry = (currentSum) => {
  if (!isMathmaticalOperator(currentSum.charAt(currentSum.length - 1))) {
    currentSum = currentSum.slice(0, -1);
    return clearEntry(currentSum);
  } else {
    return currentSum;
  }
};
