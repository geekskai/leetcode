/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let dp = {}
    function iterate(buy, index) {
        if(index === prices.length){
            return 0
        }
        if(dp[`${buy}-${index}`]) {
            return dp[`${buy}-${index}`]
        }
        let profit = 0
        if(buy) {
            dp[`${buy}-${index}`] = Math.max(
             iterate(false, index+1) + prices[index],
             iterate(buy, index+1)   
            )
        }
        else {
            dp[`${buy}-${index}`] = Math.max(
                iterate(buy, index+1),
                iterate(true, index+1) - prices[index] - fee
            )
        }
        return dp[`${buy}-${index}`]
    }
    return iterate(false, 0)
};
// @lc code=end

