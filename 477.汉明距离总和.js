/*
 * @lc app=leetcode.cn id=477 lang=javascript
 *
 * [477] 汉明距离总和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

const totalHammingDistance = nums => {
  const bits = []
  let num, mask, d
  
  for ( let i = 0; i < nums.length; i++ ) {
      mask = 1
      d = 0
      
      while ( mask <= nums[i] ) {
          if ( mask & nums[i] ) {
              bits[d] = 1 + ( bits[d] || 0 )
          }
          mask <<= 1
          d++
      }
  }

  return bits.reduce( ( a, x ) => a + x * ( nums.length - x ), 0 )
}
// @lc code=end

