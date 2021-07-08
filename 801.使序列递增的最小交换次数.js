/*
 * @lc app=leetcode.cn id=801 lang=javascript
 *
 * [801] 使序列递增的最小交换次数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(A, B) {
  const memo = new Map()
   
  function extend(rootA, rootB, idx) {
      if(idx === A.length) return 0;
      const key = `${rootA}-${rootB}-${idx}`
      if(memo.has(key)) return memo.get(key)
      
      const maxRoot = Math.max(rootA, rootB);
      const minCurr = Math.min(A[idx], B[idx]);
      
      const swap = extend(B[idx], A[idx], idx+1) + 1;
      const noSwap = extend(A[idx], B[idx], idx+1);
      
      let result = swap;
      
      if(maxRoot < minCurr) result = Math.min(swap, noSwap);
      else if(rootA >= B[idx] || rootB >= A[idx]) result = noSwap;
      
      memo.set(key, result)
      return result;
  }
  return Math.min(extend(A[0], B[0], 1), extend(B[0], A[0], 1) + 1)
};
// @lc code=end

