/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
    let res = [];
    go(root, 0, res);
    return res;
  }
  
  function go(node, l, res) {  // l means level
    if (!node) return;
  
    if (res[l] == null) {
      res.push([]);
    }
  
    if (l % 2 === 0) {
      res[l].push(node.val);
    } else {
      res[l].unshift(node.val);
    }
  
    go(node.left, l + 1, res);
    go(node.right, l + 1, res);
};
// @lc code=end

