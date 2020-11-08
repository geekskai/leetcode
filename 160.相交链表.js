/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
     
    // General idea: Switch tracks at the end, so you even out un-even linked lists
    // they will sync up at the intersection that way. Now you can straight up do a comparison
    // For example: 
    // A will follow 4 - 1 - 8 - 4 - 5 - 5 - 0 - 1 - 8
    // B will follow 5 - 0 - 1 - 8 - 4 - 5 - 4 - 1 - 8
    
    // Now we need to account for the case where they don't intersect, or our loop
    // would run forever. If after switching tracks, they both reach null at the same time
    // that's when we know to stop
    
    // Basic leetcode input checks;
    if (!headA || !headB) {
        return null;
    }
    
    // current nodes
    let curA = headA;
    let curB = headB;
    
    // our end check. this works because we switch track to sync up
    while (curA !== curB) {
        
        if (curA.next) {
            // regular follow the path
            curA = curA.next;
        } else {
        
            if (!curB.next) {
                // if curB also reaches null next, we've ended up at the end without
                // any match found. break out of the loop and return null now.
                curA = null;
                curB = null;
                break;
            }
            // switch tracks to even out uneven length
            curA = headB;
        }
        
        if (curB.next) {
            // regular follow the path
            curB = curB.next 
        } else {
            // switch tracks to even out uneven length
            curB = headA;
        }
    }
    
    return curB;
};
// @lc code=end

