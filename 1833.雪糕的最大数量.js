/*
 * @lc app=leetcode.cn id=1833 lang=javascript
 *
 * [1833] 雪糕的最大数量
 */

// @lc code=start
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < costs.length; i++) {
    if (costs[i] <= coins) {
      count++;
      coins -= costs[i];
    } else {
      break; // a small optimization, end the loop early if coins go down to zero before we reach end of the length of costs.
    }
  }
  return count;
};
// @lc code=end
