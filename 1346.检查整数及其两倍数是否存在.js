/*
 * @lc app=leetcode.cn id=1346 lang=javascript
 *
 * [1346] 检查整数及其两倍数是否存在
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const neg = new Uint8Array(1000);
    const pos = new Uint8Array(1000);
    for (const val of arr) {
      const arr = val > 0 ? pos : neg;
      const v2 = Math.abs(val);
      if (arr[v2 << 1] === 1 || arr[v2 / 2]) return true;
      arr[v2] = 1;
    }
    return false;
};
// @lc code=end

