/*
 * @lc app=leetcode.cn id=667 lang=javascript
 *
 * [667] 优美的排列 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  const ans = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = 1, flag = 1; k > 0; i++, flag *= -1, k--) {
    ans[i] = ans[i - 1] + k * flag;
  }
  return ans;
};
// @lc code=end
