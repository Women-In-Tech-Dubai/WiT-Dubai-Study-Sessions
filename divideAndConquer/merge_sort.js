/**
 * Recursion
 * Wednesday, May 13th
 * https://leetcode.com/problems/sort-an-array/
 */

/**
 *
 * Given an array of integers nums, sort the array in ascending order.
 *
 * Example 1:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 *
 * Example 2:
 * Input: nums = [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * 1. Divide array into half
 * 2. Recursively call sort function on each half
 * 3. Merge results
 *
 *         [5 2 3 1]
 *     [5 2]         [3 1]
 *   [5]    [2]    [3]     [1]
 *    [2, 5]       [1, 3]
 *        [1, 2, 3, 5]
 */
var sortArray = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }

    // divide array into two
    const midIndex = Math.floor(nums.length / 2);
    const left = nums.slice(0, midIndex);
    const right = nums.slice(midIndex);

    //merge sorted halves
    return merge(sortArray(left), sortArray(right));
};

const merge = (left, right) => {
    let mergedArray = [];

    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return [...mergedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}
