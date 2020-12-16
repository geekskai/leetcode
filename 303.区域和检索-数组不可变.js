/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
class NumArray {
    constructor(nums) {
      this.prefixSum = new Array(nums.length + 1)
      this.prefixSum[0] = 0
      for (let i = 1; i < nums.length + 1; i++) {
        this.prefixSum[i] = this.prefixSum[i - 1] + nums[i - 1]
      }
    }
    sumRange(i, j) {
      if (i === 0) return this.prefixSum[j + 1] // i=0时，this.prefixSum[-1]=0
      return this.prefixSum[j + 1] - this.prefixSum[i]
    }
  }


/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

