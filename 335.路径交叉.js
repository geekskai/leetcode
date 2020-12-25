/*
 * @lc app=leetcode.cn id=335 lang=javascript
 *
 * [335] 路径交叉
 */

// @lc code=start
/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function(x) {
    for(let i = 3; i < x.length; i++){
        
        if(x[i] >= x[i-2] && x[i-1] <= x[i-3] ||   //Fourth line crosses first line and onward
            
            x[i-1] == x[i-3] && x[i] + x[i-4] >= x[i-2] || // Fifth line meets first line and onward
            
            x[i-2] - x[i-4] >= 0 && x[i] >= x[i-2] - x[i-4] && x[i-1] >= x[i-3] - x[i-5] && x[i-1] <= x[i-3]
            // Sixth line crosses first line and onward
            )
            return true;
    }
    return false;
}
// @lc code=end

