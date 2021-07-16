/*
 * @lc app=leetcode.cn id=1295 lang=javascript
 *
 * [1295] 统计位数为偶数的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let ret = 0;
  for (let i = 0; i < nums.length; ++i) {
    (nums[i].toString().length & 1) === 0 && ++ret;
  }
  return ret;
};
// @lc code=end

