/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const freq = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  const ans = [];
  for (const [num, occ] of freq.entries()) {
    if (occ === 1) {
      ans.push(num);
    }
  }
  return ans;
};
// @lc code=end
