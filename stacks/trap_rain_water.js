/**
 * Stacks & queues
 * Wednesday, March 26th
 * https://leetcode.com/problems/trapping-rain-water/
 */

/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
 *
 * Example:
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6

 */

/**
* @param {number[]} height
* @return {number}
*/
var trap = function (height) {
    let totalUnits = 0;

    for (let i = 0; i < height.length; i++) {
        let max_left = 0;
        let max_right = 0;
        // Find max left
        for (let j = i - 1; j >= 0; j--) {
            if (height[j] > max_left) {
                max_left = height[j];
            }
        }

        // Find max right
        for (let j = i + 1; j < height.length; j++) {
            if (height[j] > max_right) {
                max_right = height[j];
            }
        }

        let units = Math.min(max_left, max_right) - height[i];
        totalUnits += units > 0 ? units : 0;
    }

    return totalUnits;
};
