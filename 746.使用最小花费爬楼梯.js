/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
 /*
    Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Min Cost Climbing Stairs.
    Memory Usage: 34.9 MB, less than 60.61% of JavaScript online submissions for Min Cost Climbing Stairs.
    
    O(n) time, O(1) space
	
	- Bottom up strategy
	- Iterative
	- Memoization
	
	Trick: At index [i], you only need to know the min cost when stepping on [i - 1] and [i - 2]. This is a slight variation on fibonacci.
    */
    
   if (cost.length === 1) return 0;
   if (cost.length === 2) return Math.min(cost[0], cost[1]);
   
   let minCostTwoBefore = cost[0];
   let minCostOneBefore = cost[1];
   
   for (let n = 2; n < cost.length; n++) {
       const minCostAtCurrent = cost[n] + Math.min(minCostOneBefore, minCostTwoBefore);
       
       minCostTwoBefore = minCostOneBefore;
       minCostOneBefore = minCostAtCurrent;
   }
       
   return Math.min(minCostOneBefore, minCostTwoBefore);
};
// @lc code=end

