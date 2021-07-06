/*
 * @lc app=leetcode.cn id=871 lang=javascript
 *
 * [871] 最低加油次数
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
 var minRefuelStops = function(T, F, S) {
  let n = S.length, pq = new MaxPriorityQueue(), ans = 0
  for (let i = 0; i <= n; i++) {
      let dist = i === n ? T : S[i][0]
      while (F < dist) {
          if (!pq.size()) return -1
          F += pq.dequeue().element, ans++
      }
      if (i < n) pq.enqueue(S[i][1])
  }
  return ans
};



// @lc code=end

