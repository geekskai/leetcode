/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var minCut = function (s) {
  const n = s.length
  const isPali = new Array(n);
  for (let i = 0; i < n; i++) {
      isPali[i] = new Array(n);
  }
  
  for (let j = 0; j < n; j++) {
      for (let i = 0; i <= j; i++) {
          if (i == j) {
              isPali[i][j] = true
          } else if (j - i == 1 && s[i] == s[j]) {
              isPali[i][j] = true
          } else if (j-i > 1 && s[i] == s[j] && isPali[i+1][j-1]) {
              isPali[i][j] = true
          } else {
              isPali[i][j] = false
          }
      }
  }

  const dp = new Array(n);
  for (let i = 0; i < n; i++) {
      dp[i] = i;
  }
  for (let i = 0; i < n; i++) {
      if (isPali[0][i]) {
          dp[i] = 0;
          continue
      } 
      for (let j = 0; j < i; j++) {
          if (isPali[j + 1][i]) {
              dp[i] = Math.min(dp[i], dp[j] + 1);
          }
      }
  }
  return dp[n - 1];
};

// @lc code=end

