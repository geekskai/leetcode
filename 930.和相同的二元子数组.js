/*
 * @lc app=leetcode.cn id=930 lang=javascript
 *
 * [930] 和相同的二元子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
  const map = new Map();
    map.set(0, 1);
    let sum = 0;
    let count = 0;
    
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        
        if (map.has(sum - S)) count += map.get(sum - S);
        
        if (!map.has(sum)) map.set(sum, 0);
        map.set(sum, map.get(sum) + 1);
    }
    
    return count;
};
// @lc code=end

