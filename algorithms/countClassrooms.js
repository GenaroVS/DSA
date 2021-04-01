// Given an array of time intervals (start, end) for classroom
// lectures (possibly overlapping), find the minimum number of rooms required.
// # of classrooms == min # of overlaps

/**
 * @param {number[][]} intervals
 * @return number
 */
const countClassrooms = (intervals) => {
  if (intervals.length === 0) return 0;
  var count = 0;
  var classRooms = {};

  for (var i = 0; i < intervals.length; i++) {
    var current = intervals[i];
    var canFit = false;
    for (var room in classRooms) {
      canFit = true;
      for (var interval of classRooms[room]) {
        if ((current[0] > interval[0] && current[0] < interval[1]) ||
          (current[1] > interval[0] && current[1] < interval[1])) {
          canFit = false;
          break;
        }
      }
      if (canFit) {
        classRooms[room].push(current);
        break;
      }
    }
    if (!canFit) {
      count += 1;
      classRooms[count] = [intervals[i]];
    }
  }

  return count;
};


var intervals = [[30,75],[0,50],[60,150],[60,70]];
var intervals2 = [[1,3],[2,6],[0,1],[15,18]];
var intervals3 = [[20,50],[20,40],[30,40],[60,70]];
console.log(countClassrooms(intervals)); // 3
console.log(countClassrooms(intervals2)); // 2
console.log(countClassrooms(intervals3)); // 3
