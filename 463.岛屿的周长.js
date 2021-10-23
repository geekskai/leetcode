/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
 const islandPerimeter = (grid) => {
    let land = 0; // 土地个数
    let border = 0; // 接壤边界的条数
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == 1) {
          land++;
          if (i < grid.length - 1 && grid[i + 1][j] == 1) {
            border++;
          }
          if (j < grid[0].length - 1 && grid[i][j + 1] == 1) {
            border++;
          }
        }
      }
    }
    return 4 * land - 2 * border;
  };
  
// @lc code=end

