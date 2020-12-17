/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */
const memo = {0: false, 1: true, 2: true, 3: true}
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
n %= 4
    if (memo[n] === undefined) {
        memo[n] = !canWinNim(n - 3) || !canWinNim(n - 2) || !canWinNim(n - 1)
    }
    return memo[n]
};
// @lc code=end

