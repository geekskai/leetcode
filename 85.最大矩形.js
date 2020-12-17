/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length || !matrix[0].length) return 0;
    const height = matrix.length;
    const width = matrix[0].length;
    const lefts = matrix[0].map(() => 0);
    const rights = matrix[0].map(() => width);
    const heights = lefts.slice();
    let max = 0;
    for (let row = 0; row < height; row++) {
      let left = 0;
      let right = width;
      for (let i = 0; i < width; i++) {
        if (matrix[row][i] === '1') {
          lefts[i] = Math.max(left, lefts[i]);
          heights[i]++;
        } else {
          lefts[i] = heights[i] = 0;
          left = i + 1
        }
  
        const rightIdx = width - 1 - i;
        if (matrix[row][rightIdx] === '1') {
          rights[rightIdx] = Math.min(right, rights[rightIdx])
        } else {
          rights[rightIdx] = width;
          right = rightIdx;
        }
      }
      for (let i = 0; i < width; i++) {
        max = Math.max(max,(rights[i] - lefts[i]) * heights[i]);
      }
    }
    return max
};
// @lc code=end

