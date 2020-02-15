/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (57.47%)
 * Likes:    731
 * Dislikes: 0
 * Total Accepted:    144.7K
 * Total Submissions: 247.6K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if(l1 === null){
        return l2;
    }
    if(l2 === null){
        return l1;
    }
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }

    // var mergedHead = { val: -1, next: null },
    //     crt = mergedHead;
    // while (l1 && l2) {
    //     if (l1.val > l2.val) {
    //         crt.next = l2;
    //         l2 = l2.next;
    //     } else {
    //         crt.next = l1;
    //         l1 = l1.next;
    //     }
    //     crt = crt.next;
    // }
    // crt.next = l1 || l2;

    // return mergedHead.next;
};
// @lc code=end

