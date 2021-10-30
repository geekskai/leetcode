/*
 * @lc app=leetcode.cn id=689 lang=javascript
 *
 * [689] 三个无重叠子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
  let n = nums.length;
  let l = n - k + 1;
  let sums = Array(l).fill(0);
  let s = nums.slice(0, k).reduce((x, y) => x + y);
  sums[0] = s;
  for (let i = 1; i < l; i++) {
    s = s + nums[i - 1 + k] - nums[i - 1];
    sums[i] = s;
  }
  let j, m;
  let mid = new Map();
  for (let i = k - 1; i < l; i++) {
    mid.set(i, 0);
  }
  for (let i = k; i < l; i++) {
    j = mid.get(i - 1);
    if (sums[i - k] > sums[j]) {
      j = i - k;
    }
    mid.set(i, j);
  }
  let right = new Map();
  for (let i = 2 * k - 1; i < l; i++) {
    right.set(i, k);
  }
  let res = [0, k, 2 * k];
  for (let r = 2 * k; r < l; r++) {
    m = right.get(r - 1);
    if (sums[r - k] + sums[mid.get(r - k)] > sums[m] + sums[mid.get(m)]) {
      m = r - k;
    }
    right.set(r, m);
    if (
      sums[r] + sums[m] + sums[mid.get(m)] >
      sums[res[0]] + sums[res[1]] + sums[res[2]]
    ) {
      res = [mid.get(m), m, r];
    }
  }
  return res;
};
// @lc code=end
