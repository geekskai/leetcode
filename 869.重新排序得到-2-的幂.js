/*
 * @lc app=leetcode.cn id=869 lang=javascript
 *
 * [869] 重新排序得到 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (N) {
  let res = N.toString().split("").sort().join("");
  for (let i = 0; i < 30; i++)
    if ((1 << i).toString().split("").sort().join("") === res) return true;
  return false;
};
// @lc code=end
