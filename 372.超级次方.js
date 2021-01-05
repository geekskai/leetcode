/*
 * @lc app=leetcode.cn id=372 lang=javascript
 *
 * [372] 超级次方
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
  const MOD_BASE = 1337;
  if (a % MOD_BASE < 2) return a % MOD_BASE;
  let ret = 1;
  for (let i = 0; i < b.length; ++i) {
    for (let j = 0; j < b[i]; ++j) {
      ret = (ret * a) % MOD_BASE;
    }
    if (i !== b.length - 1) {
      const tmp = ret;
      for (let j = 0; j < 9; ++j) {
        ret = (ret * tmp) % MOD_BASE;
      }
    }
  }
  return ret;
};
// @lc code=end

