/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  let count = 1;
  let startIndex = 0
  
  let ret = []
  for (let i = 1; i < s.length; i++) {
      if (s[i] == s[i - 1]) {
          count++
          if (i == s.length - 1 && count >= 3) {
            ret.push([startIndex, startIndex + count - 1])
          }
      } else if ( s[i] != s[i - 1] ) {
          if(count >= 3 ) {
            ret.push([startIndex, startIndex + count - 1])
          }
          count = 1
          startIndex = i
      }
  }
  return ret
};
// @lc code=end

