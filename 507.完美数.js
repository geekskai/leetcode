/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
 var checkPerfectNumber = function(num) {
  if (num <= 1) { return false; }
  let divisorsSum = 0;
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i ===0) {
          divisorsSum += i + num / i;
      }
  }
  
  return divisorsSum === 2 * num ? true : false;
};
// @lc code=end

