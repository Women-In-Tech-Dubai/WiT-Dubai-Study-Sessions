/*

https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/


Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?



Example 1:

Input: nums = [5,7,7,8,8,8,10], target = 8
Output: [3,5]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]


Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1, -1];
    if(nums.length === 0) {
        return result;
    }

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            if(result[0] == -1) {
                result[0] = i;
            } else {
                result[1] = i;
            }
        }
    }
    return result;
};
