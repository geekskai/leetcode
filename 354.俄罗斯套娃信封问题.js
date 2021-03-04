/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  envelopes.sort((a, b) => a[0] - b[0])

  const LIS = new Array(envelopes.length).fill(1)

  for (let i = 0; i < envelopes.length; i++) {
      for (let j = 0; j < i; j++) {
          if (envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]) {
              LIS[i] = Math.max(LIS[i], LIS[j] + 1)
          }
      }
  }

  return envelopes.length ? Math.max(...LIS) : 0
  
};
// @lc code=end

