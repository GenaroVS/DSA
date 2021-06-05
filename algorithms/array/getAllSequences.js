/**
 * O(N(N^2)) Time
 * @param {*} arr
 * @returns
 */
const getAllSequences = (arr) => { // Bit Masking
  let sequences = [];
  let N = arr.length;

  for (let mask = 0; mask < Math.pow(2, N); mask++) {
    let sequence = [];
    for (let j = 0; j < N; j++) {
      if (mask & (1 << j)) {
        sequence.push(arr[j]);
      }
    }
    sequences.push(sequence);
  }

  return sequences;
};

console.log(getAllSequences(['A','B','C']));