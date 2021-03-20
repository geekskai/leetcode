/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 22:31:18
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 22:31:37
 * @FilePath: /vue-jd-h5/Users/gankai/Desktop/GitHubGanKai/leetcode/415.字符串相加.js
 */
/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let sum = '';

  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    const digit1 = i < 0 ? 0 : num1.charAt(i) - '0';
    const digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
    const digitsSum = digit1 + digit2 + carry;
    sum = `${digitsSum % 10}${sum}`;
    carry = Math.floor(digitsSum / 10);
  }

  return sum;
};
// @lc code=end

