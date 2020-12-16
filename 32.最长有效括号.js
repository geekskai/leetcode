/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let longest = 0
    let stack=[-1]
    
    for(let i=0;i<s.length;i++){
      let char = s[i]
      
      if(char === '('){
        stack.push(i)
        continue
      }
      
      stack.pop()
      if(!stack.length) stack.push(i)
      else longest = Math.max((i - stack[stack.length-1]),longest)
    }
  
    return longest
};
// @lc code=end

