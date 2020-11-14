/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let result = new Array(A.length);
    
    for(let i = 0, even = 0, odd = 1; i < A.length; i ++) {
        if(A[i] % 2 === 0) {
            result[even] = A[i];
            even += 2;
        } else {
            result[odd] = A[i];
            odd += 2;
        }
    }
    return result;
};
// @lc code=end

