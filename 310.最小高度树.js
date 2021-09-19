/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findMinHeightTrees = function(n, edges) {
  if (!edges || n < 2) return [0];
  let graph = [];
// parse edges
  for (let [x, y] of edges) {
      graph[x] = graph[x] || [];
      graph[y] = graph[y] || [];
      graph[x].push(y);
      graph[y].push(x);
  }
  let leaves = [];
// init leaf nodes
  graph.map((pts,i) => pts.length === 1 && leaves.push(i));
  while (n > 2) {
      n = n - leaves.length;
      let nxt_leaves = [];
      for (let leave of leaves) {
      // remove leaf node and itself in related nodes
          tmp = graph[leave].pop();
          graph[tmp].splice(graph[tmp].indexOf(leave),1);
    // save new leaf node
          graph[tmp].length === 1 && nxt_leaves.push(tmp);
      }
      leaves = nxt_leaves;
  }
  return leaves;
};
// @lc code=end

