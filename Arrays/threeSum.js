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
 * [-2,0,0,2,2]
 * [-2, 0, 0, 2, 2]
 * [[-2, 0, 2]]
 *
 *
 * [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
 *
 */
const threeSum = (nums) => {
    const result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        console.log(`i: ${i} | ${nums[i]}, ${(i === 0 || (nums[i] !== nums[i - 1]))}`)
        if (i === 0 || (nums[i] !== nums[i - 1])) {
            let left = i + 1;
            let right = nums.length - 1;
            console.log(`checking: ${nums[i]}, ${nums[left]}, ${nums[right]}`)
            while (left < right) {
                const target = 0 - nums[i];
                if (nums[i] + nums[left] + nums[right] === 0) {
                    console.log(`adding: ${nums[i]}, ${nums[left]}, ${nums[right]}`)
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
}