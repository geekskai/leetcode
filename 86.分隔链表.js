/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-03 12:20:41
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-03 12:21:03
 * @FilePath: /refactor-with-vue3/Users/gankai/Desktop/file/data/GitHubGanKai/leetcode/86.分隔链表.js
 */
/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const dummyLess = new ListNode();
  const dummyMore = new ListNode();
  let node = head;
  let less = dummyLess;
  let more = dummyMore;
  while (node) {
      if (node.val < x) {
          less = less.next = node;
      } else {
          more = more.next = node;
      }
      node = node.next;
  }
  less.next = dummyMore.next;
  more.next = null;
  return dummyLess.next;
};
// @lc code=end

