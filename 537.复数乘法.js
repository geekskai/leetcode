/*
 * @lc app=leetcode.cn id=537 lang=javascript
 *
 * [537] 复数乘法
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  const reg = /-*[0-9]+(?=\+)|(?<=\+).+(?=i)/g;
  let [a1, a2] = a.match(reg);
  let [b1, b2] = b.match(reg);
  a1 *= 1;
  a2 *= 1;
  b1 *= 1;
  b2 *= 1;
  
  const r1 = a1 * b1 - a2 * b2;
  const r2 = a1 * b2 + a2 * b1;
  return `${r1}+${r2}i`;
};
// @lc code=end

