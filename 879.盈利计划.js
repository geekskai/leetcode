/*
 * @lc app=leetcode.cn id=879 lang=javascript
 *
 * [879] 盈利计划
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
 var profitableSchemes = function(n, minProfit, group, profit) {
    const len = group.length, MOD = 1e9 + 7;
    const dp = new Array(len + 1).fill(0).map(() => new Array(n + 1).fill(0).map(() => new Array(minProfit + 1).fill(0)));
    dp[0][0][0] = 1;
    for (let i = 1; i <= len; i++) {
        const members = group[i - 1], earn = profit[i - 1];
        for (let j = 0; j <= n; j++) {
            for (let k = 0; k <= minProfit; k++) {
                if (j < members) {
                    dp[i][j][k] = dp[i - 1][j][k];
                } else {
                    dp[i][j][k] = (dp[i - 1][j][k] + dp[i - 1][j - members][Math.max(0, k - earn)]) % MOD;
                }
            }
        }
    }
    let sum = 0;
    for (let j = 0; j <= n; j++) {
        sum = (sum + dp[len][j][minProfit]) % MOD;
    }
    return sum;
};


// @lc code=end

