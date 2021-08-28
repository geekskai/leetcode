/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
  let ans = [nums[0]]
  nums.reduce((pre,cur)=>{
      ans.push(pre+cur)
      return pre+cur
  })
  return ans
};
// @lc code=end

