/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    let newHead = new ListNode(0)
    while(head){
        const t = head
        head = head.next
        let cur = newHead
        while(cur){
            if(!cur.next || t.val <= cur.next.val){
                [cur.next, t.next] = [t, cur.next]
                break
            }
            cur = cur.next
        }
    }
    return newHead.next
};
// @lc code=end

