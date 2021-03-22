/**
 * Find a path that traverses the pyramid from top to bottom visiting numbers whose product is a given target value.
 * Each step in the path must go down one row, and go either one step to the left or one step to the right.
 * @param {number[][]} pyramid
 * @param {number} num
 * @return {string}
 */
const productPyramid = (pyramid, num) => {
  var height = pyramid.length;

  function find(target, current, path, row, col) {
    if (current === target && row === height - 1) {
      return path;
    } else if (row === height - 1) {
      return null;
    } else if (current > target) {
      return null;
    }

    var left = find(target, current * pyramid[row + 1][col], path + 'L', row + 1, col);
    if (left) return left;
    var right = find(target, current * pyramid[row + 1][col + 1], path + 'R', row + 1, col + 1);
    return left || right;
  }

  return find(num, pyramid[0][0], '', 0, 0)
};


var pyramid1 = [[1],[2,3],[4,1,1]];
var pyramid2 = [[2], [4,3], [3,2,6], [2,9,5,2], [10,5,2,15,5]];

console.log(productPyramid(pyramid1, 2)); //LR
console.log(productPyramid(pyramid1, 8)); //LL
console.log(productPyramid(pyramid1, 3)); //RL


console.log(productPyramid(pyramid2, 720)); //LRLL
console.log(productPyramid(pyramid2, 360)); //RRLL
console.log(productPyramid(pyramid2, 1080)); //LLRL
console.log(productPyramid(pyramid2, 480)); //LLLL
console.log(productPyramid(pyramid2, 540)); //RLLL
console.log(productPyramid(pyramid2, 160)); //LRRL
console.log(productPyramid(pyramid2, 1200)); //LRRR





