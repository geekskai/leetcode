/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (!t) return '';
    const left = tree2str(t.left);
    const right = tree2str(t.right);
    return t.val + (left || right ? `(${left})` : '') + (right ? `(${right})` : '');
};
// @lc code=end

