/*
A number is considered perfect if its digits sum up to exactly 10.
Given a positive integer n, return the n-th perfect number.
For example, given 1, you should return 19. Given 2, you should return 28.
*/

const sumOfDigits = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};


const nthPerfectNum = (n) => {
  let num = 9;
  let numOfPerfect = 0;

  while (numOfPerfect < n) {
    num += 1;
    if (sumOfDigits(num) === 10) {
      numOfPerfect += 1;
    }
  }
  return num;
};

let param = parseInt(process.argv[2]);
console.log(nthPerfectNum(param));