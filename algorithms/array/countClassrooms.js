// Given an array of time intervals (start, end) for classroom
// lectures (possibly overlapping), find the minimum number of rooms required.
// # of classrooms == max # of overlaps

/**
 * @param {number[][]} intervals
 * @return number
 */
const countClassrooms = (intervals) => {
  if (intervals.length === 0) return 0;

  var starts = intervals
    .map(([start, end]) => {
      return start;
    })
    .sort((a, b) => a - b);

  var ends = intervals
    .map(([start, end]) => {
      return end;
    })
    .sort((a, b) => a - b);

  var max = curOverLap = i = j = 0;

  while (i < intervals.length && j < intervals.length) {
    if (starts[i] < ends[j]) {
      curOverLap += 1;
      max = Math.max(max, curOverLap);
      i += 1;
    } else {
      curOverLap -= 1;
      j += 1;
    }
  }

  return max;
};


var intervals = [[30,75],[0,50],[60,150],[60,70]];
var intervals2 = [[1,3],[2,6],[0,1],[15,18]];
var intervals3 = [[20,50],[20,40],[30,40],[60,70]];
console.log(countClassrooms(intervals)); // 3
console.log(countClassrooms(intervals2)); // 2
console.log(countClassrooms(intervals3)); // 3
