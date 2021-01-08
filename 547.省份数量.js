/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(M) {
 // visited set
 const visited = new Set();
 // friend circles count
 let circles = 0;

 // iterate thru matrix
 for (let i = 0; i < M.length; i++) {
     // check if this friend has been visited before
     if (!visited.has(i)) {
         // start dfs for this friend
         dfs(i);
         // this is another friend circle
         circles++;
     }
 }

 return circles;

 // helper method to do dfs traversal thru M
 function dfs(i) {
     // go thru this friend's friends
     for (let j = 0; j < M.length; j++) {
         // check if this is a friend, and not visited before
         if (M[i][j] === 1 && !visited.has(j)) {
             // add as visited
             visited.add(j);
             // call dfs
             dfs(j);
         }
     }
 }
};
// @lc code=end

