/**
 * Strings & arrays
 * Wednesday, April 1st
 * https://leetcode.com/problems/3sum/
 */

/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * The solution set must not contain duplicate triplets.
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 *  [-1, 0, 1],
 *  [-1, -1, 2]
 * ]
 * [-4, -1, -1, 0, 1, 2]
 * [[-1, 0, 1],[-1,-1,2]]
 *
 *
 * Given array nums = [-2,0,0,2,2]
 * Solution set:
 * [[-2, 0, 2]]
 *
 * This approach involves:
 * 1. Sorting the numbers
 * 2. For each number, use a two-pointer approach (bi-directional) to scan the remainder of the array (p1 starts at i + 1 and p2 starts at n - 1)
 * 3. Move the two pointers inwards based on whether the sum > target or sum < target
 */
const threeSum = (nums) => {
    const result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (nums[i] !== nums[i - 1])) {
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                const target = 0 - nums[i];
                if (nums[i] + nums[left] + nums[right] === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] == nums[left + 1]) {
                        left++;
                    }
                    left++;
                    while (left < right && nums[right] == nums[right - 1]) {
                        right--;
                    }
                    right--;
                } else if (nums[left] + nums[right] > target) {
                    right--;
                } else if (nums[left] + nums[right] < target) {
                    left++;
                }
            }
        }
    }
    return result;
};