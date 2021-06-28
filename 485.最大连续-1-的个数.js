/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0, curr = 0;
  for (let k of nums) {
    max = Math.max(max, curr += k);
    if (!k) curr = 0;
  }
  return max;
};
// @lc code=end

