/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-04 13:46:13
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-04 13:46:39
 * @FilePath: /ReactDemo/Users/mac/Desktop/gankai/leetcode/509.斐波那契数.js
 */
/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(N) {
  let memo = new Array(N + 1)
  memo[0] = 0
  memo[1] = 1
  for(let i = 2; i <= N; i++){
      memo[i] = memo[i - 1] + memo[i - 2]
  }
  return memo[N]
};
// @lc code=end

