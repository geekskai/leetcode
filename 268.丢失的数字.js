/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
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
var missingNumber = function (nums) {
  let set = new Set();
  nums.forEach((it, i) => {
    set.add(it);
  });
  let tem = nums.length + 1;
  for (let i = 0; i < tem; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  return -1;
};
// @lc code=end
