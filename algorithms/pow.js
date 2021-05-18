/*
Implement integer exponentiation. That is, implement the pow(x, y) function,
where x and y are integers and returns x^y.

Do this faster than the naive method of repeated multiplication.
*/

/**
 * @param {number} base
 * @param {number} exp
 * @return {number}
 */
const pow = (base, exp) => {
  if (exp < 0) {
    base = 1 / base;
    exp *= -1;
  }
  let oddRemainder = 1;
  while (exp > 1) {
    if (exp % 2 === 0) {
      base *= base;
      exp /= 2;
    } else {
      oddRemainder *= base;
      base *= base;
      exp = (exp - 1) / 2;
    }
  }

  return oddRemainder * base;
};

console.log(pow(2, 10));
console.log(pow(2, -3));