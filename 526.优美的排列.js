/*
 * @lc app=leetcode.cn id=526 lang=javascript
 *
 * [526] 优美的排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 const countArrangement = N => {

  const dp = new Map( Array.from( { length: N + 1 }, ( _, i ) => [ i, new Map() ] ) )

  const check = ( number, mask ) => {
      
      if ( dp.get( number ).has( mask ) ) return dp.get( number ).get( mask )

      let index, count = 0
      for ( index = 1; index <= N; index++ ) {

          // skip nums we've already included
          if ( mask & 1 << index ) continue

          // skip if invalid
          if ( number%index && index%number ) continue

          // add to count
          count += number === N || check( number + 1, mask | 1 << index )

      }

      return dp.get( number ).set( mask, count ) && count
      
  }

  return check( 1, 0 )

}
// @lc code=end

