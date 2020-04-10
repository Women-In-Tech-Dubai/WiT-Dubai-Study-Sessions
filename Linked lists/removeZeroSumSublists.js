/**
 * Linked lists
 * Wednesday, March 18th
 * https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
 */

/**
 *
 * Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.
 *
 * After doing so, return the head of the final linked list.  You may return any such answer.
 *
 * Example 1:
 * Input: head = [1,2,-3,3,1]
 * Output: [3,1]
 * Note: The answer [1,2,1] would also be accepted.
 *
 * Example 2:
 * Input: head = [1,2,3,-3,4]
 * Output: [1,2,4]
 *
 * Example 3:
 * Input: head = [2,3,-3,-2, 1]
 * Output: [1]
 */

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
var removeZeroSumSublists = function (head) {
    if (head === null || head.next === null) {
        return head.val === 0 ? null : head;
    }

    let p1 = head;
    let p2 = head;
    let prev = head;
    while (p1 !== null) {
        let sum = 0;
        while (p2 !== null) {
            sum += p2.val;

            if (sum !== 0) {
                p2 = p2.next;
            } else {
                if (p1 == head) {
                    prev = null;
                    head = p2.next;
                    p1 = head;
                    p2 = p1;
                } else {
                    p1 = prev;
                    p1.next = p2.next;
                    p2 = p1;
                }
            }
        }
        prev = p1;
        if (p1 !== null) {
            p1 = p1.next;
        }
        p2 = p1;
    }
    return head;
};

