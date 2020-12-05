/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const length = nums.length - 1;
    let start = 0;
    let end = length;
    let center;
    
    // get the center
    while (start <= end) {
        center = Math.floor((start + end) / 2);
        if (nums[center] === target) {
            start = center;
            end = center;
            break;
        }
        else if (nums[center] < target) start = center + 1;
        else end = center - 1;
    }

    if (start > end) return [-1, -1];
    
    // find the edges
    while (nums[start - 1] === target) start--;
    while (nums[end + 1] === target) end++;
    return [start, end];
};
// @lc code=end

