// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

/**
 * @param {number[]} elevations
 * @returns {number}
 */
const trappingWater = (height) => {
  var count = 0;
  var maxLeft = height[0];
  var maxRight = height[height.length - 1];
  var left = 1;
  var right = height.length - 2;

  while(left <= right) {
    if (maxLeft < maxRight) {
      maxLeft = Math.max(maxLeft, height[left]);
      count += maxLeft - height[left];
      left += 1;
    } else {
      maxRight = Math.max(maxRight, height[right]);
      count += maxRight - height[right];
      right -= 1;
    }
  }

  return count;
};

console.log(trappingWater([4,2,0,3,2,5])); // 9
console.log(trappingWater([3,0,1,3,0,4])); // 8