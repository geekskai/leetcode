/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 *
 * https://leetcode-cn.com/problems/last-stone-weight/description/
 *
 * algorithms
 * Easy (57.49%)
 * Likes:    36
 * Dislikes: 0
 * Total Accepted:    10.6K
 * Total Submissions: 17.8K
 * Testcase Example:  '[2,7,4,1,8,1]'
 *
 * 有一堆石头，每块石头的重量都是正整数。
 * 
 * 每一回合，从中选出两块最重的石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
 * 
 * 
 * 如果 x == y，那么两块石头都会被完全粉碎；
 * 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 * 
 * 
 * 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= stones.length <= 30
 * 1 <= stones[i] <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a, b) => a - b)
    while (stones.length > 1) {
        if (stones[stones.length - 2] === stones[stones.length - 1]) {
            stones.length = stones.length - 2
        } else {
            stones[stones.length - 2] = stones[stones.length - 1] - stones[stones.length - 2]
            stones.length = stones.length - 1
        }
        stones.sort((a, b) => a - b)
    }
    return stones[0] || 0
};
// @lc code=end

