/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return n.toString(3).split("").reduce((prev,curr)=>parseInt(prev)+parseInt(curr))==1;
};
// @lc code=end

