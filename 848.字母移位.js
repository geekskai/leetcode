/*
 * @lc app=leetcode.cn id=848 lang=javascript
 *
 * [848] 字母移位
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
    for (let i = shifts.length - 2; i > -1; --i)
    shifts[i] += shifts[i + 1];

for (let i = 0; i < shifts.length; ++i)
    shifts[i] = String.fromCharCode(
        (S[i].charCodeAt() + shifts[i] - 97) % 26 + 97
    );

return shifts.join('');
};
// @lc code=end

