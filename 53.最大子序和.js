/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var prev = 0;
   var max = -Number.MAX_VALUE;

   for (var i = 0; i < nums.length; i++) {
       prev = Math.max(prev + nums[i], nums[i]);
       max = Math.max(max, prev);
   }
   return max;
};
// @lc code=end

