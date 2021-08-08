/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let min = nums[0];
    let secondMinUpdatedAfterMin = Infinity;
    for (let val of nums) {
        if (val <= min) {
            min = val;
        } else if (val <= secondMinUpdatedAfterMin) {
            secondMinUpdatedAfterMin = val;
        } else {  // min < secondMinUpdatedAfterMin < val
            return true;
        }
    }
    return false;

};
// @lc code=end

