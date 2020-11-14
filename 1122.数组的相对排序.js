/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const lookup = new Map();
    const N = arr2.length;
    arr2.forEach((a, i) => {
      lookup.set(a, i);
    });
    return arr1.sort((a, b) => {
      a = lookup.has(a) ? lookup.get(a) : N + a;
      b = lookup.has(b) ? lookup.get(b) : N + b;
      return a - b;
    });
};
// @lc code=end

