/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let h = ~~Math.sqrt(area)
  while (area % h !== 0) h--
  return [area / h, h]
};
// @lc code=end

