/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-30 13:51:40
 * @LastEditors: gankai
 * @LastEditTime: 2020-12-30 13:51:59
 * @FilePath: /notta-meeting/Users/mac/Desktop/gankai/leetcode/1005.k-次取反后最大化的数组和.js
 */
/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = (a, k) => {
  if (0 === k) return a.reduce((acc, curr) => acc + curr);
  let [min, mindex] = [Infinity];
  for (let i = 0; i < a.length; i++) if (a[i] < min) [min, mindex] = [a[i], i];
  if (min < 0 || k % 2) a[mindex] = -a[mindex];
  return largestSumAfterKNegations(a, min < 0 ? k - 1 : 0);
};
// @lc code=end

