/**
 * Strings & arrays
 * Friday, April 10th
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 */

/**
 * Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.
 *
 * Formally the function should:
 *
 * Return true if there exists i, j, k
 * such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
 *
 * Note: Your algorithm should run in O(n) time complexity and O(1) space complexity. ewww
 *
 * Example 1:
 * Input: [1,2,3,4,5]
 * Output: true
 *
 * Example 2:
 * Input: [5,4,3,2,1]
 * Output: false
 *
 * Example 3:
 * Input: [1,4,0,2,3]
 * Output: true
 *
 * Example 4:
 * Input: [12,2,10,9,5,9]
 * Output: true (the subsequence being [2,5,9])
 *
 * Example 5:
 * Input: [1, 3, 0, 5]
 * Output: true (the subsequene being [1,3,5])
 */

var increasingTriplet = function (nums) {

    let firstNumber = Number.MAX_SAFE_INTEGER;
    let secondNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= firstNumber) {
            firstNumber = nums[i];
        } else if (nums[i] <= secondNumber) {
            secondNumber = nums[i];
        } else {
            return true;
        }
    }

    return false;
};