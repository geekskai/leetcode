/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ones = 0; // to collect bits that appear once
    let twos = 0; // to collect bits that appear twice
    let threes = 0; // to collect bits that appear three times
    
    for (const num of nums) {
        // twos is the union of itself and bits that just 
        // appear the second time with the new number.
        twos = twos | (ones & num);
        ones = ones ^ num;
        threes = ones & twos;
        
        // remove threes from ones and twos
        ones = ones & ~threes;
        twos = twos & ~threes;
    }
    
    return ones
};
// @lc code=end

