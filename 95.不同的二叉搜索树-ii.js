/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n, l = 1, r = n, res = []) {
    for(let i = l; i <= r; i++){
        for(const left of generateTrees(n, l, i - 1)){
            for(const right of generateTrees(n, i + 1, r)){
                res.push({val: i, left, right});
            }
        }
    }
    return n ? res.length ? res : [null] : [];
};
// @lc code=end

