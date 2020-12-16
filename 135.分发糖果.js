/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var len = ratings.length;
    var forward = new Array(len);
    backward = new Array(len);

    forward[0] = 1;
    backward[len-1] = 1;
    for (var i = 1; i < len; i++) {
        if (ratings[i] > ratings[i-1]) forward[i] = forward[i-1] + 1;
        else forward[i] = 1;
    }

    for (var i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1]) backward[i] = backward[i+1] + 1;
        else backward[i] = 1;
    }
    var sum = 0;
    for (var i = 0; i < len; i++) {
        sum += Math.max(forward[i], backward[i]);
    }
    return sum;
};
// @lc code=end

