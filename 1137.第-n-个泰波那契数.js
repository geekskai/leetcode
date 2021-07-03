/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const T =[0,1,1];
  for(let i = 3;i<=n;i++){
      T[i] = T[i-1] + T[i-2] + T[i-3]
  }
  return T[n]
};
// @lc code=end

