/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let removals = 0
    
    if(intervals.length < 1) return removals
    
    intervals.sort((a, b) => a[0] - b[0])
    
    let slow = 0
    let fast = 1
    
    while(fast < intervals.length) {
        if(intervals[fast][0] < intervals[slow][1]) {
            ++removals
            
            if(intervals[fast][1] < intervals[slow][1])
                slow = fast
        } else
            slow = fast
        
        ++fast
    }
    
    
    return removals
};
// @lc code=end

