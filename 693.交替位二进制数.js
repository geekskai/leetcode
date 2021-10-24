/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
/**
 * @param {number} n
 * @return {boolean}
 */
 var hasAlternatingBits = function (n) {
    let binary = n.toString(2);
    return !(binary.indexOf('11') > -1 || binary.indexOf('00') > -1);
  };
  
// @lc code=end

