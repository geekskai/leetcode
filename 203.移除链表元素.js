/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;

  // if head is the value were deleting and if there is any repetition lets handle that case first otherwise we'll just break out of the loop
  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      break;
    }
  }

  // skip any nodes whos values match the parameters and set it to the node after
  // if the node is found, set curr.next to the node after it then try again
  // otherwise iterate forward
  let curr = head;
  while (curr && curr.next) {
    if (curr.next.val === val) curr.next = curr.next.next;
    else curr = curr.next;
  }

  return head;
};
// @lc code=end

