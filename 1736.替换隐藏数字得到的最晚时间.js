/*
 * @lc app=leetcode.cn id=1736 lang=javascript
 *
 * [1736] 替换隐藏数字得到的最晚时间
 */

// @lc code=start
/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
  time = time.split('')
  if (time[0] === "?") time[0] = time[1] > 3 ? "1" : "2"
  if (time[1] === "?") time[1] = time[0] > 1 ? "3" : "9"
  if (time[3] === "?") time[3] = "5"
  if (time[4] === "?") time[4] = "9"
  return time.join('')
};
// @lc code=end

