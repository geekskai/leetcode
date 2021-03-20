/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 22:36:12
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 22:36:27
 * @FilePath: /vue-jd-h5/Users/gankai/Desktop/GitHubGanKai/leetcode/441.排列硬币.js
 */
/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let stairs = 0;
  while (stairs <= n) { n -= stairs; stairs++; }
  return stairs - 1
};
// @lc code=end

