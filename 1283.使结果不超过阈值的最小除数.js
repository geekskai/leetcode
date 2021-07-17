/*
 * @lc app=leetcode.cn id=1283 lang=javascript
 *
 * [1283] 使结果不超过阈值的最小除数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
  // Use max value in nums array as the max
  const max = Reflect.apply(Math.max, null, nums);
  if (nums.length === threshold) return max;
  let left = 1, right = max;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
      sum += Math.ceil(nums[i] / mid);
    }
    sum > threshold ? (left = mid + 1) : (right = mid);
  }
  return left;
};

// @lc code=end

