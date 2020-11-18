/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let curTank = 0, totalTank = 0, pos = 0;
    for (let i=0;i<gas.length;i++) {
        curTank+= gas[i] - cost[i];
        totalTank+= gas[i] - cost[i];
        if (curTank<0) {
            curTank = 0;
            pos = i+1;
        }
    }   
    return totalTank<0?-1:pos;
};
// @lc code=end

