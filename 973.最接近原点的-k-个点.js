/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    var getLength = function([a, b]) {
        return (a * a) + (b * b);
    }
    return points.sort((a, b) => getLength(a) - getLength(b)).slice(0, K);
};
// @lc code=end

