/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    const dp = new Array(S.length).fill(Infinity);
    
    dp[0] = S[0] === C ? 0 : Infinity
    
    for(let i = 1; i < S.length; i++) {
        if(S[i] === C) {
            dp[i] = 0;
        } else {
            dp[i] = dp[i-1] === Infinity ? Infinity : dp[i-1] + 1;
        }
    }

    let dist = Infinity;
    
    for(let i = S.length-1; i >= 0; i--) {
        if(S[i] === C) {
            dist = 0;
        }
        dp[i] = Math.min(dist, dp[i]);
        dist += 1;
    }
    
    return dp;
};
// @lc code=end

