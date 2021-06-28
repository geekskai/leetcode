/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
  
    let row = 0;
    let col = matrix[0].length - 1;
  
    while (col >= 0 && row <= matrix.length - 1) {
      if (matrix[row][col] === target) return true;
      else if (matrix[row][col] > target) col--;
      else if (matrix[row][col] < target) row++;
    }
  
    return false;
  }
// @lc code=end

