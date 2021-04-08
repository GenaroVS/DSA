/* Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces. */

/**
 *
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const justifyText = (words, k) => {
  var lines = [];
  var line = [];
  var remLen = k;

  for (var i = 0; i < words.length; i++) {
    line.push(words[i]);
    remLen -= words[i].length + 1;
    if (i === words.length - 1 || remLen - words[i + 1].length < 0) {
      remLen += 1;
      if (line.length === 1) {
        var line = '';
        line += words[i];
        while (remLen > 0) {
          line += ' ';
          remLen -= 1;
        }
        lines.push(line);
      } else {
        var extraSpaceCount = remLen % (line.length - 1);
        var spacesPerCount = Math.floor(remLen / (line.length - 1)) + 1;
        var space = '';
        var extraSpace = '';

        for (var j = 0; j < spacesPerCount; j++) space += ' ';
        for (var j = 0; j < extraSpaceCount; j++) extraSpace += ' ';

        line[0] += extraSpace;
        lines.push(line.join(space));
      }
      line = [];
      remLen = k;
    }
  }

  return lines;
};

var words =  ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
var words2 = ["the"];
console.log(justifyText(words, 16));
console.log(justifyText(words2, 6));