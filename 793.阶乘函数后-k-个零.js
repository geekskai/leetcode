/*
 * @lc app=leetcode.cn id=793 lang=javascript
 *
 * [793] 阶乘函数后 K 个零
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function(K) {
/*
  each 5 add 0{1}, 5^2 adds 0{2} ...
  rtn= 5|0 
  */

  // k = count of 0; t = cout of 5
  let k = 0, t = 0
  while (k <= K) {
    if (k == K) return 5
    t++
    let count = count5(t) + 1
    k += count
  }
  return 0

  function count5(t) {
    let rtn = 0
    while (t % 5 == 0) {
      t = t / 5
      rtn++
    }
    return rtn
  }
};
// @lc code=end

