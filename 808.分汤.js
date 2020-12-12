/*
 * @lc app=leetcode.cn id=808 lang=javascript
 *
 * [808] 分汤
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var soupServings = function(N) {
    if(N >= 5000) return 1
    
    const recur = (A, B, memo = new Map()) => {
        if(A <= 0 && B <= 0) return 0.5
        if(A <= 0) return 1
        if(B <= 0) return 0
        
        let key = `A-${A} B-${B}`
        if(memo.has(key)) return memo.get(key)
        
        let r = 0.25 * (
            recur(A-100, B, memo) +
            recur(A-75, B-25, memo) +
            recur(A-50, B-50, memo) +
            recur(A-25, B-75, memo)
        )
        memo.set(key, r)
        return r
    }
    
    return recur(N, N)
};
// @lc code=end

