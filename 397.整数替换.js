/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  if (n === 1) {
    return 0;
  }
  if (n % 2 === 0) {
    return 1 + integerReplacement(Math.floor(n / 2));
  }
  return (
    2 +
    Math.min(
      integerReplacement(Math.floor(n / 2)),
      integerReplacement(Math.floor(n / 2) + 1)
    )
  );
};
// @lc code=end
