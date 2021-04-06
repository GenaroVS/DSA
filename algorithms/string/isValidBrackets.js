// Given a string of round, curly, and square open and closing brackets,
// return whether the brackets are balanced (well-formed).

/**
 * O(N) Time N = str.length
 * O(N) Space
 * @param {string} str
 * @return {boolean}
 */
const isValidBrackets = (str) => {
  if (str.length === 0 || str.length === 1) return false;
  var stack = [str[0]];
  var i = 1;

  while (i < str.length) {
    if (str[i] === '[' || str[i] === '(' || str[i] === '{') {
      stack.push(str[i]);
    } else {
      var opener = stack.pop();
      if (opener === '(' && str[i] !== ')') return false;
      if (opener === '[' && str[i] !== ']') return false;
      if (opener === '{' && str[i] !== '}') return false;
    }
    i += 1;
  }

  return stack.length > 0 ? false : true;
};

console.log(isValidBrackets('([])[]({})')); // true
console.log(isValidBrackets('([)]')); // false
console.log(isValidBrackets('((()')); // false
console.log(isValidBrackets('((()))')); // true
console.log(isValidBrackets('{')); // false


