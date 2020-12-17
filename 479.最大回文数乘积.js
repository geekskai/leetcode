/*
 * @lc app=leetcode.cn id=479 lang=javascript
 *
 * [479] 最大回文数乘积
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
    var max = Math.pow(10, n) - 1;
    var min = Math.pow(10, n-1);
    var pal = 0;
    for (var i = max; i >= min; i--) {
        for (var j = max; j >= i; j--) {
            var result = i * j;
            if (result > pal) {
                var str = result.toString();
                var rStr = str.split("").reverse().join("");
                if (str == rStr) {
                    pal = result;
                    break;
                }
            }else{
                break;
            }
        }
    	if(j == max) {
    	    break;
    	}
    }
    return (pal % 1337);
};
// @lc code=end

