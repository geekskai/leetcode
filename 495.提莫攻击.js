/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function (timeSeries, duration) {
    //初始化中毒总时间和中毒结束时间轴
    let poisontime =0
    let poisonendtime = 0
    for (let i = 0; i < timeSeries.length; i++) {
        //当平A的时候艾希没有中毒，则中毒结束时间变成为当前时间+持续时间
        //中毒总时间就要加上之一个周期的持续时间
        if (timeSeries[i] >= poisonendtime) {
            poisonendtime = timeSeries[i] + duration
            poisontime += duration
        }
        //当平A的时候艾希已经中毒，则中毒结束时间就是当前中毒结束时间加上两次平A的间隔时间
        //中毒总时间也要加上两次平A的间隔时间
        else {
            poisonendtime = poisonendtime + (timeSeries[i] - timeSeries[i - 1])
            poisontime += (timeSeries[i] - timeSeries[i - 1])
        }
    }
    return poisontime
};
// @lc code=end

