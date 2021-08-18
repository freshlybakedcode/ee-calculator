export const convertOperator = (digit) => {
  switch (digit) {
    case '×':
      return '*';
    case '÷':
      return '/';
    default:
      return digit;
  }
};
