/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

function singleNumber(nums) {
	return nums.reduce((prev, curr) => prev ^ curr, 0);
}
// @lc code=end

