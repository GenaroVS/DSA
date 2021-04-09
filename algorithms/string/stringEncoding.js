/* Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A". */

const encodeString = (str) => {
  var curChar = str[0];
  var count = 0;
  var result = '';

  for (var char of str) {
    if (curChar !== char) {
      result += count + curChar;
      curChar = char;
      count = 0;
    }
    count += 1
  }

  result += count + curChar;

  return result;
};

const decodeString = (str) => {
  var result = '';
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (i % 2) {
      while (count) {
        result += str[i];
        count -= 1;
      }
    } else {
      count = Number(str[i]);
    }
  }

  return result;
};

console.log(encodeString('AAAABBBCCDAA'));
console.log(decodeString('4A3B2C1D2A'));