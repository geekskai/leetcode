/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let bits = [];
    for (let i = 0; i <= num; i++)
        // remove 0 from bits
        bits.push(Number(i).toString(2).replace(/0/g, '').length);
    return bits;
};
// @lc code=end

