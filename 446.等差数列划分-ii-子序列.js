/*
 * @lc app=leetcode.cn id=446 lang=javascript
 *
 * [446] 等差数列划分 II - 子序列
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
var numberOfArithmeticSlices = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(0).map(() => new Map());
  let res = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // 以i结尾的所有可能的差值
      const diff = nums[i] - nums[j];
      // 以j结尾，差值为diff的数量
      const countJ = dp[j].get(diff) || 0;
      res += countJ;
      // 以i结尾，已有差值为diff的数量
      const countI = dp[i].get(diff) || 0;
      // 更新
      dp[i].set(diff, countI + countJ + 1);
    }
  }
  return res;
};
// @lc code=end
