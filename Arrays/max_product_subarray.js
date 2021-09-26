/**
 * 
 * https://leetcode.com/problems/maximum-product-subarray/
 

Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

Example 3:
Input: nums = [1,2,3,4]
Output: 1 * 2 * 3 * 4

Example 4: 
Input: [2, 3, -4, 5, 0, -1, 9]
Output: 9

Constraints:

1 <= nums.length <= 2 * 10^4
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let maxProduct = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let rightProduct = 1;

        for (let k = i; k < nums.length; k++) {
            rightProduct *= nums[k];

            if (rightProduct > maxProduct) {
                maxProduct = rightProduct;
            }
        }
    }

    return maxProduct;
};

