/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function(root) {
    let h = height(root); /* get the height using helper fn below */
    let results = []; /* init an array to hold final answer */
    let depth = 1; /* init depth to 1 since we are using 1-based height */
    for (depth; depth <= h; depth++) {
      /* iterate from depth to tree height */
      results.push(levelOrder(root, depth)); /* push an array of each level's node values to results */
    }
  
    return results.reverse();
  };
  
  /*
    recursive level-order traversal which collects all nodes
    from each level into an array.
  */
  function levelOrder(node, d, level = []) {
    if (node == null) {
      return level;
    }
    if (d === 1) {
      level.push(node.val);
    } else if (d > 1) {
      levelOrder(node.left, d - 1, level);
      levelOrder(node.right, d - 1, level);
    }
    return level;
  }
  
  /*
    computes the largest root-to-leaf path,
    using 1-based counting.
  */
  function height(node) {
    if (node == null) {
      /* base case */
      return 0;
    }
    let left = height(node.left);
    let right = height(node.right);
  
    return Math.max(left, right) + 1;
  }
// @lc code=end

