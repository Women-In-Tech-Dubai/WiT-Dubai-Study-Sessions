/**
 * Linked lists
 * Wednesday, March 18th
 * https://leetcode.com/problems/sort-list/
 */

/**
Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5

*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = (head) => {

    if (head == null || head.next === null) {
        return head;
    }

    // 1. Divide the list into half
    let p1 = head;
    let p2 = head;
    let prev = head;
    while (p2 && p2.next) {
        prev = p1;
        p1 = p1.next;
        p2 = p2.next.next;
    }

    // Important: set the tail for the first half of the list
    prev.next = null;

    let firstHalf = head;
    let secondHalf = p1;

    // 2. Sort both lists recursively
    let l1 = sortList(firstHalf);
    let l2 = sortList(secondHalf);

    // 3. Merge the sorted lists
    let dummyNode = new ListNode(0);
    let pointer = dummyNode;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            pointer.next = l1;
            l1 = l1.next;
        } else {
            pointer.next = l2;
            l2 = l2.next;
        }
        pointer = pointer.next;
    }

    // If any node left in either l1 or l2, add to the merged list
    if (l1) {
        pointer.next = l1;
    }

    if (l2) {
        pointer.next = l2;
    }

    return dummyNode.next;
}