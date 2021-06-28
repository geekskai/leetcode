/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
 * @return {number}
 */
var findSecondMinimumValue = function (node, minVal = node.val) {
  if (!node) return -1;
  if (node.val !== minVal) return node.val;

  const leftVal = findSecondMinimumValue(node.left, minVal);
  const rightVal = findSecondMinimumValue(node.right, minVal);

  if (leftVal === -1 && rightVal === -1) return -1;
  if (leftVal === -1 || rightVal === -1) return Math.max(leftVal, rightVal);

  return Math.min(leftVal, rightVal);

};
// @lc code=end

