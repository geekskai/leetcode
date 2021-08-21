/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
 var serialize = function(root) {
  if (root === null) {
      return '';
  }
  var result = [];
  var queue = [root];
  
  while (queue.length > 0) {
      var node = queue.shift();
      
      if (node === null) {
          result.push('null');
          continue;
      }
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
  }
  
  // Remove the trailing nulls
  loop: for (var i=result.length - 1; i >= 0 ; i--) {
      if (result[i] === 'null') {
          result.splice(i, 1);
      }
      else {
          break loop;
      }
  }
  
  return result.toString();
  
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  if (data === '') {
      return null;
  }
  var values = data.split(',');
  var root = new TreeNode(parseInt(values[0]));
  var queue = [root];
  for (var i=1; i < values.length; i++) {
      var parent = queue.shift();
      
      if (values[i] !== 'null') {
          var left = new TreeNode(parseInt(values[i]));
          parent.left  = left;
          queue.push(left);
      }
      if (values[++i] !== 'null' && i !== values.length) {
          var right = new TreeNode(parseInt(values[i]));
          parent.right = right;
          queue.push(right);
      }
  }
  
  return root;
  
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

