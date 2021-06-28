/*
 * @lc app=leetcode.cn id=765 lang=javascript
 *
 * [765] 情侣牵手
 */

// @lc code=start
/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
  // no need to swap e.g [0,1,3,2] both [0,1] and [3,2] no need
  // a circle of two, 1 step, e.g [0,3,2,1] 
  // a circle of three, 2 step, e.g [5,0,1,2,3,4] 
  // a circle of n, n-1 tep

  // couple map to index
  let row1 = row.map(x => Math.floor(x / 2)),
    sets = new Array(row.length / 2),
    swaps = 0
  for (let i = 0; i < row1.length; i += 2) {
    if (row1[i] == row1[i + 1]) continue
    swaps += addMap(row1[i], row1[i + 1])
  }
  return swaps

  function addMap(i, j) {
    let setI = sets[i], setJ = sets[j]
    // both registered to swap
    if (setI && setJ) {
      if (setI == setJ) {
        // form circle
        return setI.size - 1
      }
      // connect two half circles, merge two sets
      for (let n of setJ) {
        setI.add(n)
        sets[n] = setI
      }
      return 0
    }
    // none registered, init half circle
    if (!setI && !setJ) {
      let s = new Set([i, j])
      sets[i] = s
      sets[j] = s
      return 0
    }
    // one registered
    let s = setI || setJ, toAdd = setI ? j : i
    s.add(toAdd)
    sets[toAdd] = s
    return 0
  }
};
// @lc code=end

