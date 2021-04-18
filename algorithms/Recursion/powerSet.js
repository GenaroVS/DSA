/*
This problem was asked by Google.

The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.
*/

/**
 * @param {number[]} set
 * @param {number[][]}
 */
const powerSet = (set) => {
  if (!set.length) return [[]];

  var result = powerSet(set.slice(0, set.length - 1));

  var added = [];
  for (var subset of result) {
    added.push(subset.concat([set[set.length - 1]]));
  }

  return result.concat(added);
};

debugger;
console.log(powerSet([1,2,3]));