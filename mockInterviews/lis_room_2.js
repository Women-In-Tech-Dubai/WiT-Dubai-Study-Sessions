/**
 * Longest Increasing Subsequence
 * Given an unsorted array of integers, find the length of longest increasing subsequence.
 *
 *
 * Example:
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 *
 *
 * Note:
 * There may be more than one LIS combination, it is only necessary for you to return the length.
 * Your algorithm should run in O(n2) complexity.
 *
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
// [2,5,3,7,101,18]
var lengthOfLIS = function(nums) {
    if (!nums.length) {
        return 0;
    }
    return helper(nums, 0, -1);
};

var helper = function(nums, currentIndex, previousIndex) {
    // base cases
    if (currentIndex >= nums.length) {
        return 0;
    }

    // recursive relation
    // include the current number if it is larger than previous
    let count1 = 0;
    if (previousIndex === -1 || nums[currentIndex] > nums[previousIndex]) {
        count1 = 1 + helper(nums, currentIndex + 1, currentIndex);
    }

    // exclude the current number
    let count2 = helper(nums, currentIndex + 1, previousIndex);

    return Math.max(count1, count2);
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS([90, 80, 70, 60, 50]));