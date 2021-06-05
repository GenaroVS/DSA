/* Daily Problem #86
Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).

For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.
*/

/**
 *
 * @param {string} str
 * @param {number} count
 */
const makeValidParans = (str) => {
  let closedCount = 0;
  let openCount = 0;

  for (let char of str) {
    if (char === '(') {
      openCount += 1;
    } else if (openCount > 0 && char === ')') {
      openCount -= 1;
    } else if (openCount === 0) {
      closedCount += 1;
    }
  }

  return openCount + closedCount;
};

console.log(makeValidParans('()())()')); // 1
console.log(makeValidParans(')(')); // 2
console.log(makeValidParans('(())')); // 0

