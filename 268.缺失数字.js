/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 *
 * https://leetcode-cn.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (52.67%)
 * Likes:    217
 * Dislikes: 0
 * Total Accepted:    48.4K
 * Total Submissions: 89.7K
 * Testcase Example:  '[3,0,1]'
 *
 * 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
 * 
 * 示例 1:
 * 
 * 输入: [3,0,1]
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [9,6,4,2,3,5,7,0,1]
 * 输出: 8
 * 
 * 
 * 说明:
 * 你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length;//length of array.
    let sum = (len*(len+1))/2; //序列公式从0到n的所有n之和
    let sum2 = nums.reduce((a,c)=> a+c); //sum of array elements.
    return sum-sum2; //difference is the answer
};

// @lc code=end

