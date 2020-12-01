/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var buffer = [];
    var result = [];
    search(0, target);
    return result;
  
    function search(startIdx, target) {
      if (target === 0) return result.push(buffer.slice());
      if (target < 0) return;
      if (startIdx === candidates.length) return;
      buffer.push(candidates[startIdx]);
      search(startIdx, target - candidates[startIdx]);
      buffer.pop();
      search(startIdx + 1, target);
    }
};
// @lc code=end

