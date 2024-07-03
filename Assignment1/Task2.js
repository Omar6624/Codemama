const Task2 = (prices) => {
  if (prices.length === 0) return 0;
  let minPrice = prices[0];
  let max = 0;
  for (let price of prices) {
    let profit = 0;
    //check for the minimum price
    if (price < minPrice) minPrice = price;
    //here checking for potential profit if we sell the stock the current day. if the
    profit = price - minPrice;

    //checking if  profit made by selling today is the maximum profit
    if (max < profit) max = profit;
  }
  return max;
};

//time complexity O(n) n = length of prices array // time grows with the input size of the array
//space complexity O(1) extra space needed does not grow with the growing input size

console.log(Task2([7, 6, 4, 3, 1]));
