/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-29 13:30:51
 * @LastEditors: gankai
 * @LastEditTime: 2020-12-29 13:31:06
 * @FilePath: /ReactDemo/Users/mac/Desktop/gankai/leetcode/99.恢复二叉搜索树.js
 */
/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  var node1, node2;
  var prev = new TreeNode(-Number.MAX_VALUE);
  traverse(root);
  var tmp = node1.val;
  node1.val = node2.val;
  node2.val = tmp;
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    if (node.val < prev.val) {
      node2 = node;
      if (!node1) node1 = prev;
    }
    prev = node;
    traverse(node.right);
  }
};
// @lc code=end

