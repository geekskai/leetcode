/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  let sum = r0 + c0, res = []
  // let grids = Array.from({ length: R }, () => new Array(C))
  for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
          res.push([i, j])
          // if ((i + j) === sum) {
          //     [grids[0][0], grids[i][j]] = [grids[i][j], grids[0][0]]
          // }
      }
  }

  res.sort((a, b) => {
      let ta = Math.abs(a[0] - r0) + Math.abs(a[1] - c0),
          tb = Math.abs(b[0] - r0) + Math.abs(b[1] - c0);
      return ta - tb;
  });
  return res;

};
// @lc code=end

