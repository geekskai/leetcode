/*
 * @lc app=leetcode.cn id=1413 lang=javascript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    var min = 1;
    var sum = 0;
	
    for(var i=0;i<nums.length;i++){
        sum = sum+nums[i];
        min = Math.min(min,sum);
    }
    if(min == 1){
        return min;
    }
	// add 1 to negative of min value obtained to keep the sum always positive
    return (-1*min)+1;
};
// @lc code=end

