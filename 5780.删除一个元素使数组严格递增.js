/*
 * @lc app=leetcode.cn id=5780 lang=javascript
 *
 * [5780] 删除一个元素使数组严格递增
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = (a) => {
  if (isAscending(a)) return 1;
  let n = a.length;
  for (let i = 0; i < n; i++) {
    let tmp = a.slice(0, i).concat(a.slice(i + 1)); // array of removing one element
    if (isAscending(tmp)) return 1;
  }
  return 0;
};

const isAscending = (arr) => {
  return arr.every((x, i) => {
    return i === 0 || x > arr[i - 1];
  });
};
// @lc code=end
