/**
 * https://leetcode.com/problems/move-zeroes/
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * 
 * Note that you must do this in-place without making a copy of the array
 * 
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 * 
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * 
 * Follow up: Could you minimize the total number of operations done?
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let i = 0;
    let numOfZeros = nums.filter((num) => num === 0).length;

    // loop through array
    // check if the element at index is a 0
    // > splice, & push to end of array
    while (i < nums.length - numOfZeros) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
        } else {
            i++
        }
    }
};

let nums = [0,1,0,3,12];
moveZeroes(nums)
console.log(nums);