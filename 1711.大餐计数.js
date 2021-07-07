/*
 * @lc app=leetcode.cn id=1711 lang=javascript
 *
 * [1711] 大餐计数
 */

// @lc code=start
/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(D) {
  let m = new Map(), ans = 0
  for (let n of D) m.set(n, (m.get(n) || 0) + 1)           // Push D into a standard frequency map
  for (let [k,v] of m)                                     // For each [key, value] pair
      for (let i = 1 << 21; i >= 2 * k && i; i >>= 1)      // Iterate through power sums using bitwise shifts
          if (i === 2 * k) ans += v * (v - 1) / 2          // If  k is its own matching number, add pairs to ans
          else if (m.has(i - k)) ans += m.get(i - k) * v   // Otherwise, add product with matching number freq.
  return ans % 1000000007
};
// @lc code=end

