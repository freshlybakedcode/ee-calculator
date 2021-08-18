const operatorRegex = /[+\-*/]/g;

export const isMathmaticalOperator = (string) =>
  string.search(operatorRegex) !== -1;
