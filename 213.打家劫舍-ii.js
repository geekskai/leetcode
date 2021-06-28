/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length < 2) {
    return nums[0] || 0;
}

const memo1 = [nums[0]];
const memo2 = [0, nums[1]];

for (let i=1; i<nums.length - 1; i++) {
    memo1[i] = Math.max(nums[i] + (memo1[i - 2] || 0), memo1[i - 1]);
}

for (let i=2; i<nums.length; i++) {
    memo2[i] = Math.max(nums[i] + memo2[i - 2], memo2[i - 1]);
}

return Math.max(memo1.pop(), memo2.pop());
};
// @lc code=end

