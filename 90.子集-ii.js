/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-04 13:50:34
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-04 13:50:52
 * @FilePath: /ReactDemo/Users/mac/Desktop/gankai/leetcode/90.子集-ii.js
 */

/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
       
  nums = nums.sort((a,b) => a-b);
    
  const res = [];
  
  function fn(length, start=0, arr = []) {
      if (arr.length === length) {
          res.push(arr.slice());
          return;
      }
      for(let i=start; i<nums.length; i++) {       
          if (i !== start && nums[i-1] === nums[i]) continue;
          arr.push(nums[i]);
          fn(length, i+1, arr);
          arr.pop();            
      }
  }
  
  for(let length=0; length<=nums.length; length++) {
      fn(length);
  }
  
  return res;
};
// @lc code=end

