/**
 * Strings & arrays
 *
 * https://leetcode.com/problems/interval-list-intersections/
 */

/**
 * Interval List Intersections
 *
 * Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order.
 *
 * Return the intersection of these two interval lists.
 *
 * (Formally, a closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.  The
 * intersection of two closed intervals is a set of real numbers that is either empty, or can be represented as a
 * closed interval.
 *
 * For example, the intersection of [1, 3] and [2, 4] is [2, 3].)
 *
 * Input:
 * A = [[0,2],[5,10],[13,23],[24,25]]
 * B = [[1,5],[8,12],[15,24],[25,26]]
 * ans = [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
 *
 * Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
 * Reminder: The inputs and the desired output are lists of Interval objects, and not arrays or lists.
 */

 /**
  * 1. Check for gaps
  *     a. If starting point of A > ending point of B -> increment B
  *     b. If starting point of B > ending point of A -> increment A
  * 2. Understand how two closed intervals intersect
  *     a. Max of starting points
  *     b. Min of ending points
  * 3. How to move forward in each list
  *     a. If ending point of A <= ending point of B -> move list A forward
  *     b. If ending points of B <= ending point of A -> move list B forward
  */

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let indexA = 0;
    let indexB = 0;

    let intersections = [];

    while(indexA < A.length && indexB < B.length) {
        if (A[indexA][0] > B[indexB][1]) {
            indexB++;
            continue;
        }
        if (B[indexB][0] > A[indexA][1]) {
            indexA++;
            continue;
        }
        let startingIntersection = Math.max(A[indexA][0], B[indexB][0]);
        let endingIntersection = Math.min(A[indexA][1], B[indexB][1]);
        intersections.push([startingIntersection, endingIntersection]);

        if (A[indexA][1] <= B[indexB][1]) {
            indexA++;
        } else if (B[indexB][1] <= A[indexA][1]) {
            indexB++;
        }
    }

    return intersections;
}