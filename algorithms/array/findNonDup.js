/*
Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

Do this in O(N) time and O(1) space.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
const findNonDup = (nums) => {
  var dupicateNums = Math.floor(nums.length / 3);
  var start = 0;
  var count = 0;

  for (var i = 0; i < dupicateNums; i++) {

    while (nums[start] < 0) start += 1;
    var curNum = nums[start]

    for (var j = start + 1; j < nums.length; j++) {
      if (nums[j] > 0 && nums[j] === curNum) {
        nums[j] = -1;
        count += 1;
      }
    }

    count > 0 ? nums[start] = -1 : i -= 1;
    start += 1;
    count = 0;
  }
  console.log(nums);

  for (var num of nums) {
    if (num > 0) return num;
  }

  return null;
};

debugger;
console.log(findNonDup([6,1,3,3,6,6]));
console.log(findNonDup([13,19,13,13]));

