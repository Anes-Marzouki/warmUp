/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/
//array.indexOf(Math.min(...array)) ==== return the index of the min in the array.

var maxProfit = function(prices) {
  // YOUR CODE HERE
  var array = prices;
  var max;
  var min = Math.min(...array);
  var indexOfMin = array.indexOf(min);
  var newArray = array.slice(indexOfMin + 1); 
//   console.log(min)
//   console.log(indexOfMin);
//   console.log(newArray);
  for (var i = indexOfMin; i < newArray.length; i++) {
      if (array[i] > min) {
          max = newArray[i];
      }
  }
//   console.log(array)
  if (max > min) {
      console.log(array.indexOf(max) + 1);
  }else {
//       console.log(0);
  }
};
