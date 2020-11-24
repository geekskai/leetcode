/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var result = [];
    search(1, [], k, n);
    return result;
  
    function search(from, prefix, k, n) {
      if (k === 0 && n === 0) return result.push(prefix);
      if (from > 9) return;
      prefix.push(from);
      search(from + 1, prefix.slice(0), k - 1, n - from);
      prefix.pop();
      search(from + 1, prefix.slice(0), k, n);
    }
};
// @lc code=end

