/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let arr = [...new Set(nums)].sort((a, b) => a - b);
  if (arr.length < 3) {
    return arr.pop();
  } else {
    return arr[arr.length - 3];
  }
};
// @lc code=end
