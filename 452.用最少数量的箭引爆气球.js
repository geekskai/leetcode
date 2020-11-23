/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let prev = null, count = 0;
    
    for(let [start, end] of points) {
        if(prev == null || prev < start) {
            count++;
            prev = end;
        } else prev = Math.min(prev, end);
    }
    return count;
};
// @lc code=end

