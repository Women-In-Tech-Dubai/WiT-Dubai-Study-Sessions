/**
    https://leetcode.com/problems/search-in-rotated-sorted-array/

    There is an integer array nums sorted in ascending order (with distinct values).

    Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) 
    such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
    For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

    Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

    You must write an algorithm with O(log n) runtime complexity.

    Example 1:
    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4

    [0,1,2,4,5,6,7] pivot = 1
    [2,4,5,6,7,0,1]
    [2,4,5,6] [7,0,1]
    

    Example 2:
    Input: nums = [4,5,6,7,0,1,2], target = 3
    Output: -1

    Example 3:
    Input: nums = [1], target = 0
    Output: -1
    
    Constraints:

    1 <= nums.length <= 5000
    -10^4 <= nums[i] <= 10^4
    All values of nums are unique.
    nums is guaranteed to be rotated at some pivot.
    -10^4 <= target <= 10^4

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
    var search = function(nums, target) {
        
        let start = 0;
        let end = nums.length - 1;
        while(start <= end) {
            let mid = Math.floor((start + end) /2);
            if(nums[mid] === target) return mid;
            if(nums[start] <= nums[mid]) {
                if(target >= nums[start] && target <= nums[mid]) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
            else {
                if(target > nums[mid] && target <= nums[end]) {
                    start = mid + 1; 
                } else {
                    end = mid - 1;
                }
            }
        }
        return -1;
    };


// initialize start, end

// loop until start & end meet (until start > end)

// set mid
// mid = 4 (floor(start + end / 2)) 

// check if (nums[mid] == target) > return mid

// check which side is sorted
// > check if left side is sorted (nums[start] < nums[mid])
// >> check if target is in left side (target > array[start] && target < array[mid]) > end = mid - 1
// >> (else) target is in right side > start = mid + 1

// > else right side is sorted
// >> target is in left side > start = mid + 1
// >> target is in right side >  end = mid - 1


// return -1