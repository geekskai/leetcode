/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let lo = 0;
    let hi = 0;
    
    for (let char of s) {
      if (char === '(') {
        hi++;
        lo++;
        continue;
      }
      
      if (char === ')' && hi === 0) {
        return false;
      }
      
      if (char === ')') {
        hi--;
        lo = Math.max(0, lo - 1);
        continue;
      }
      
      hi++;
      lo = Math.max(0, lo - 1);
    }
    
    return lo === 0;
};
// @lc code=end

