/*
Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.
*/

const { MinHeap, MaxHeap } = require('../../Heap.js');

/**
 * @param {number[]} prices
 * @return {number} biggest profit
 */
const stockProfit = (prices) => {
  var largestProfit = 0;
  var smallestPrice = prices[0];

  for (var price of prices) {
    smallestPrice = Math.min(smallestPrice, price);
    largestProfit = Math.max(largestProfit, price - smallestPrice);
  }

  return largestProfit;
};

var prices = [10, 5, 4, 3, 2, 1, 3];
var prices2 = [9, 11, 8, 7, 5, 10];
console.log(stockProfit(prices));
console.log(stockProfit(prices2));
