/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 2) {
    return true;
  }

  let left = 0, right = num, guessSquared;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    guessSquared = mid * mid;
    if (guessSquared == num) {
      return true;
    }
    if (guessSquared > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
// @lc code=end

