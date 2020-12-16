/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // the map will be our tracking mechanism
    let m = new Map();
    
    // the max occurrences
    let maxVal = 0;
    
    // the number of tasks that has the max occurrences
    let maxValCount = 0;
    
    for(let k of tasks){
      let tVal = m.has(k) ? m.get(k)+1: 1;
      m.set(k, tVal);
      // set our maxVal and number of maxVal tasks only if we have a new max
      if(tVal > maxVal){
        maxVal = tVal;
        maxValCount = 1;
      // otherwise, increment number of maxVal tasks
      } else if(tVal === maxVal){
        maxValCount++;
      }
    }
    // our formula, handle the edge case
    return Math.max(tasks.length, (maxVal - 1) * (n + 1) + maxValCount);
  };
// @lc code=end

