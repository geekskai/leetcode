/*
 * @lc app=leetcode.cn id=818 lang=javascript
 *
 * [818] 赛车
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number}
 */
var racecar = function (t) {
  let arr = [{ m: 0, p: 0, v: 1 }];
  let best = Infinity;
  while (arr.length) {
    let { m, p, v } = arr.pop();
    if (p == t) best = Math.min(best, m);
    if (m >= best) continue;
    arr.push({ m: m + 1, p: p + v, v: 2 * v });
    if ((p + v > t && v > 0) || (p + v < t && v < 0))
      arr.push({ m: m + 1, p, v: (-1 * v) / Math.abs(v) });
  }
  return best;
};
// @lc code=end
