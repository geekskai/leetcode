/*
 * @lc app=leetcode.cn id=1846 lang=javascript
 *
 * [1846] 减小和重新排列数组后的最大元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
 
 ///////////// Another version 104ms /////////////////////////////
 const stin = (a) => a.sort((x, y) => x - y);
 const maximumElementAfterDecrementingAndRearranging = (a) => {
     let n = a.length;
     stin(a);
     if (a[0] != 1) a[0] = 1;
     for (let i = 1; i < n; i++) {
         if (a[i] > a[i - 1] + 1) a[i] = a[i - 1] + 1;
     }
     return a[n - 1];
 };
// @lc code=end

