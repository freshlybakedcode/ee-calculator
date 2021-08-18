// Couple of things happening here:
// - We need to evaluate the current sum.
// - We're not going to use eval for security and performance reasons so `Function('"use strict";return (' + obj + ')')()` will take care of this for us
// - I'd really love to not use an external library for this (although there are plenty out there)
// - ...but JS has floating point errors which need handling; `parseFloat` will mostly solve this and the Math.round/Math.pow(10, 10) method add accuracy and enforce ten decimal places
// - We also need to convert back to a string as this is what the rest of the code relies

export const evaluateSum = (sum) => {
  const evaluate = (obj) => Function('"use strict";return (' + obj + ')')();
  return (
    Math.round(parseFloat(evaluate(sum) * Math.pow(10, 10))) / Math.pow(10, 10)
  ).toString();
};
