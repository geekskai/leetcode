/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-04 13:47:27
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-04 13:47:41
 * @FilePath: /ReactDemo/Users/mac/Desktop/gankai/leetcode/81.搜索旋转排序数组-ii.js
 */
/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;

  while (left < right) {
      let mid = left + parseInt((right - left) / 2); // lower mid

      if (nums[mid] == nums[right]) right--; // the only difference between Q.33
      else if (nums[mid] < nums[right]) { // right part sorted
          if (target > nums[mid] && target <= nums[right]) left = mid + 1;
          else right = mid
      } else{
          if (target > nums[mid] || target < nums[left]) left = mid + 1;
          else right = mid;
      } 
  }
  return nums[left]==target;
};
// @lc code=end

