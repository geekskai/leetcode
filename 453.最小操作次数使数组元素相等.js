/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    if(nums == null || nums.length<=1) return 0;
    let min = nums[0]
    let sum = 0
    for( i = 0;i< nums.length;i++){
        sum += nums[i]
        min = Math.min(min,nums[i])
    }
    return sum-min*nums.length
};
// @lc code=end

