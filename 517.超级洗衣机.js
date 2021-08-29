/*
 * @lc app=leetcode.cn id=517 lang=javascript
 *
 * [517] 超级洗衣机
 */

// @lc code=start
/**
 * @param {number[]} machines
 * @return {number}
 */
 const findMinMoves = machines => {
  let load, tot = 0, max = 0
  const sum = machines.reduce( ( a, x ) => a + x )
  const target = sum / machines.length
  if ( target % 1 ) return -1
  
  machines.forEach( n => {
      load = n - target
      tot += load
      max = Math.max( max, Math.abs( tot ), load )
  })
  
  return max
}
// @lc code=end

