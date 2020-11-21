/*
 * @lc app=leetcode.cn id=1510 lang=javascript
 *
 * [1510] 石子游戏 IV
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const cache = {};
var winnerSquareGame = function(n) {
    if(cache[n]!==undefined) return cache[n];
    
    for(let i=1; i< 316;i++)
        {
            const square = i*i;
            if(square > n)
                break;
            
           let opponentN = n-square;
            
           if(!winnerSquareGame(opponentN))
               return cache[n] = true;
            
        }    
    
    return cache[n] = false;
};
// @lc code=end

