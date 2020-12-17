/*
 * @lc app=leetcode.cn id=623 lang=javascript
 *
 * [623] 在二叉树中增加一行
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    let dummy = {val: v, left: root, right: null}, nodes = [dummy];
    while(--d > 0) nodes = nodes.reduce((res, node) => res.concat(node.left || [], node.right || []), []);
    nodes.forEach(node => [node.left, node.right] = [{val: v, left: node.left, right: null}, {val: v, left: null, right: node.right}])
    return dummy.left;
};
// @lc code=end

