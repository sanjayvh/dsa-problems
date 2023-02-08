// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// Easy

var maxProfit = function (prices) {
    let max = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        }

        if (prices[i] - min > max) {
            max = prices[i] - min;
        }
    }

    return max;
};

var prices = [7, 1, 5, 3, 6, 4];
var prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
