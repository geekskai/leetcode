/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (33.07%)
 * Likes:    1360
 * Dislikes: 0
 * Total Accepted:    194.6K
 * Total Submissions: 588.5K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x < 0) {
        x = x.toString().split('-')[1]; // 负数提取数字
        x = '-' + [...x].reverse().join('');
        x = +x; // 转数字
    } else {
        x = x.toString(); // 转字符
        x = +[...x].reverse().join(''); // 转为数组 颠倒数组 再合字符 最后转数字
    }
    if (x >= Math.pow(2, 31) - 1 || x <= Math.pow(-2, 31) + 1) { // 判断溢出
        return 0;
    }
    return x;
};
// @lc code=end

