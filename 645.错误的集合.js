/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let i = 0
    while (i < nums.length) {
        if (nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]) {
            const temp = nums[i]
            nums[i] = nums[nums[i] - 1]
            nums[temp - 1] = temp
        } else {
            i++
        }
    }
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return [nums[i], i + 1]
        }
    }
};
// @lc code=end

