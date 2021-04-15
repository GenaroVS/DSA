/*
Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.
*/

/**
 * O(N) Time
 * O(1) Space
 * @param {string[]} rgb
 * @return {string[]}
 */
const sortRGB = (rgb) => {
  var pivot = 0;
  var current = 'R';

  for (var i = 1; i <= 3; i++) {
    if (i === 2) current = 'G';
    else if (i === 3) current = 'B';

    for (var j = pivot; j < rgb.length; j++) {
      if (rgb[j] === current) {
        rgb[j] = rgb[pivot];
        rgb[pivot] = current;
        pivot += 1;
      }
    }
  }

  return rgb;
};

var rgb1 = ['G','B','R','R','R','B','G'];
var rgb2 = ['R','G','B','G','B','R'];
console.log(sortRGB(rgb1));
console.log(sortRGB(rgb2));
