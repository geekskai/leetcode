/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(!+num1 || !+num2) return '0'
    const prod = Array(num1.length + num2.length).fill(0);
    let currIdx = prod.length-1;
    
    for(let i = num1.length-1; i >= 0; i--) {
        let idx = currIdx--;
        
        for(let j = num2.length-1; j >= 0; j--) {
            const res = +num1[i] * +num2[j] + prod[idx];
            prod[idx] = res % 10;
            prod[--idx] += Math.floor(res / 10);
        }
    }
    return prod.join('').replace(/^0+/, '')
};
// @lc code=end

