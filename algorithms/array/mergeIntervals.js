/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  var results = [];
  intervals = intervals.sort((a,b) => {
    return a[0] - b[0];
  });

  results.push(intervals[0]);

  for (var i = 1; i < intervals.length; i++) {
    var last = results.length - 1;
    if (intervals[i][0] > results[last][1]) {
      results.push(intervals[i]);
    } else {
      results[last][1] = Math.max(results[last][1], intervals[i][1])
    }
  }

  return results;
};