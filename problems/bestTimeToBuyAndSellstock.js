/**
 * @param {number[]} prices
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const maxProfit = (prices) => {
  let totalProfit = 0;
  for (let i = 0; i < prices.length - 1; i += 1) {
    if (prices[i] < prices[i + 1]) {
      totalProfit += prices[i + 1] - prices[i];
    }
  }
  return totalProfit;
};
