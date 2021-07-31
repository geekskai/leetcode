/*
 * @lc app=leetcode.cn id=987 lang=javascript
 *
 * [987] 二叉树的垂序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  const nodeInfos = []; // holds the x, y, & val information of each node traversed
    
  getNodeInfos(root, 0, 0);

// sort by the following order of importance:
//  1. x - coordinate
//  2. y - coordinate precedence given to higher value
//  3. node val in ascending order

  nodeInfos.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2]);
  
  const map = new Map();
  
  for (const [x, y, val] of nodeInfos) {
      if (!map.has(x)) map.set(x, []);
      map.get(x).push(val);
  }
  
  return [...map.values()];
  
  function getNodeInfos(node, x, y) {
      if (node) {
          getNodeInfos(node.left, x - 1, y - 1); // traverse left
    nodeInfos.push([x, y, node.val]);
          getNodeInfos(node.right, x + 1, y - 1); // traverse right
      }
  }
};
// @lc code=end

