/*
 * @lc app=leetcode.cn id=805 lang=javascript
 *
 * [805] 数组的均值分割
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function (nums) {
  const n = nums.length;
  if (n < 2) return false;
  const sum = nums.reduce((a, b) => a + b);
  const memo = Array.from({ length: n }, () => new Map());

  return dfs(0, 0, 0);

  function dfs(total, start, count) {
    if (count == n) return false;
    if (count > 0 && total * n == sum * count) return true;
    if (!memo[start].has(total)) {
      memo[start].set(total, true);
      for (let i = start; i < n - 1; i++) {
        if (dfs(total + nums[i], i + 1, count + 1)) return true;
      }
      memo[start].set(total, false);
      return false;
    } else {
      return memo[start].get(total);
    }
  }
};

// @lc code=end
