/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.58%)
 * Likes:    760
 * Dislikes: 0
 * Total Accepted:    174.5K
 * Total Submissions: 308.4K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
//   return  x.toString() === x.toString().split('').reverse().join('')
if (x < 0) return false
if (x < 10) return true
let result = 0

for (let i = 2; i <= 15; i++) {
    if (x < Math.pow(10, i)) {
        const length = i
        const isLengthOdd = length % 2 !== 0
        const maxIndex = length - 1
        const halfIndex = Math.floor(length / 2)
        let calcX = x
        
        for (let j = maxIndex; j >= halfIndex; j--) {
            const edge = Math.pow(10, j)
            if (calcX < edge) continue  // e.g. 101, '0' no need calculate
            
            const currentNum = parseInt(calcX / edge)
            
            if (j === halfIndex && isLengthOdd) {
               result += currentNum * edge
            } else {
               result += currentNum * edge + currentNum * Math.pow(10, length - 1 - j) 
            }
            
            calcX = calcX - currentNum * edge
        }
        
        break
    }
}

return result === x
};
// @lc code=end

