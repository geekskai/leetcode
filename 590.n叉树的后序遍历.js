/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (69.89%)
 * Likes:    51
 * Dislikes: 0
 * Total Accepted:    16.6K
 * Total Submissions: 23K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]\r'
 *
 * 给定一个 N 叉树，返回其节点值的后序遍历。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其后序遍历: [5,6,3,2,4,1].
 * 
 * 
 * 
 * 说明: 递归法很简单，你可以使用迭代法完成此题吗?
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
 * @param {Node} root
 * @return {number[]}
 */
function Node(val, children = []) {
    // #"Every node is an Object of this function"
    this.val = val;
    this.children = children;
};

var postorder = function (root, order = []) {
    // #"Initiate an empty order array"
    if (!root) return [];
    if (root.children.length === 0) return [root.val];
    // #"This is our basecase and how we break out of the recursive loop. If there are no children then we hit the end of the tree and we return an array, because typically it should match the element we are trying to return in the first place"

    for (let i = 0; i < root.children.length; i++) {
        //    #"Traverse the children...if there are any"
        const child = root.children[i];
        order = order.concat(postorder(child))
        //  #"Our recursive call. Since our recursive call returns an array we need to concatenate it with our current order array."
    }
    order.push(root.val)
    //    #"We push the root's value in last to make sure the children's values get pushed in first."

    return order;
};
// @lc code=end



// var postorder = function (root, order = []) {
//     if (!root) return []
//     let list = []
//         ; (function (root) {
//             if (!root) return
//             root.children.forEach(item => {
//                 arguments.callee(item)
//             })
//             list.push(root.val)
//         })(root)
//     return list
// };