/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 22:30:26
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 22:30:43
 * @FilePath: /vue-jd-h5/Users/gankai/Desktop/GitHubGanKai/leetcode/412.fizz-buzz.js
 */
/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
};
// @lc code=end

