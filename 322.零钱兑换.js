/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (35.69%)
 * Likes:    446
 * Dislikes: 0
 * Total Accepted:    54.6K
 * Total Submissions: 143.2K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount <= 0) return 0; /* test for amount edge cases */
    var minCoins = Infinity; /* this is what we will return eventually */
    coins = coins.sort((a,b) => b - a); /* sort coins decending */
    
    function combo(amount, ind, count){
        if(ind >= coins.length) return; 
        /* do not continue if ind is past the possible range */
        for(var i = Math.floor(amount/coins[ind]); i >= 0; i--){
            var newCount = count + i;
            var rem = amount - coins[ind] * i;
            if(rem > 0 && newCount < minCoins) {
                /* if the remainder is greater than 0 we haven't found the perfect combo 
                yet so we need to continue trying other coins */
                combo(rem, ind + 1, newCount);
            } else if(newCount < minCoins){
                /* if the remainder is 0 and the newCount is less than the current 
                minCoins count then we set the minCoins to newCount */
                minCoins = newCount;
            } else if(newCount >= minCoins - 1){
                /* if the newCount is greater than minCoins then we don't need to 
                continue with this combination */
                break;
            }
        }
    }
    combo(amount, 0, 0);
    return minCoins == Infinity ? -1 : minCoins;
};
// @lc code=end

