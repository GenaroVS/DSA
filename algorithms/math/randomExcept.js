// Given an integer n and a list of integers l, write a function that randomly generates a number from 0 to n-1 that /// isn't in l (uniform).

const randomExcept = (n, exceptions) => {
  let list = [];
  let excepts = {}
  for (let num of exceptions) {
    excepts[num] = true;
  }

  for (let i = 0; i < n; i++) {
    if (!excepts[i]) {
      list.push(i);
    }
  }

  let randIndex = Math.floor(Math.random() * list.length);
  return list[randIndex];
};


let i = 0;
let freq = {};
while (i < 1000) {
  let num = randomExcept(10, [2,5,7])
  freq[num] = freq[num] + 1 || 1;
  i += 1
};

console.dir(freq);