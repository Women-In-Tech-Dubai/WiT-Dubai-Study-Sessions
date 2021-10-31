/**
 * https://leetcode.com/problems/binary-search/solution/
 * 
 * Binary Search
  
    Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

    You must write an algorithm with O(log n) runtime complexity.

    Example 1:

    Input: nums = [-1,0,3,5,9,12], target = 9
    Output: 4
    Explanation: 9 exists in nums and its index is 4
    Example 2:

    Input: nums = [-1,0,3,5,9,12], target = 2
    Output: -1
    Explanation: 2 does not exist in nums so return -1
    

    Constraints:

    1 <= nums.length <= 10^4
    -10^4 < nums[i], target < 10^4
    All the integers in nums are unique.
    nums is sorted in ascending order.

 */

    /*
   [-1,0,3,5,9,12] target = -2
   1. startIndex = 0, endIndex = length of the array - 1, mid 
   2. check midpoint of orginal array (round down) = (endIndex + startIndex) / 2
   3. if value is > middle, then your new array is the right side
   4. if value is < middle, then your new array is left side
   5. repeat step 1 for right side or left side
   6. keep repeating until you find your target. 
    */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   let startIndex = 0;
   let endIndex = nums.length - 1;
    // check if target is in bounds
    if(target < nums[0] || target > nums[nums.length - 1]){return -1;}

    while (startIndex <= endIndex) {
         let mid = Math.floor((endIndex + startIndex) / 2);

         if (nums[mid] === target) {
            return mid;
         }
         if(target > nums[mid]) 
         {
            startIndex = mid + 1;
         }
         else if (target < nums[mid]) 
         {
            endIndex = mid - 1;
         }
    }
   return -1;
};