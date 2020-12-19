/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let xs = new Set();
    let ys = new Set();
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]) {
          continue;
        } else {
          xs.add(i);
          ys.add(j);
        }
      }
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (xs.has(i) || ys.has(j)) {
          matrix[i][j] = 0;
        } else {
          continue;
        }
      }
    }
  };var setZeroes = function(matrix) {
    let xs = new Set();
    let ys = new Set();
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]) {
          continue;
        } else {
          xs.add(i);
          ys.add(j);
        }
      }
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (xs.has(i) || ys.has(j)) {
          matrix[i][j] = 0;
        } else {
          continue;
        }
      }
    }
  };
// @lc code=end

