/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // [2,3,4,2,2], 4
    let memory = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (memory.has(target - nums[i])) {
            return [memory.get(target - nums[i]), i]
        } else {
            memory.set(nums[i], i)
        }
    }
    return []
};
// @lc code=end

