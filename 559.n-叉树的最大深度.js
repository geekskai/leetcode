/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
 var maxDepth = function(root) {
    if(!root) return 0;
    if(!root.children) return 1;
    let max = 0;
    //遍历孩子节点
    for(let i=0; i<root.children.length; i++) {
        //递归
        let childDepth = maxDepth(root.children[i]);
        //选最大的
        max = Math.max(max, childDepth)
    }
    //算上根节点
    return max + 1;
};

// @lc code=end

