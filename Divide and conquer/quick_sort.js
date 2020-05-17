/**
 * https://leetcode.com/problems/sort-an-array/
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
 * 1. Select pivot
 * 2. Swap elements based on pivot: make sure everything on the left of the pivot, is less than pivot, and same for right
 * 3. Partition the array: left array (left pointer up till pivotIndex), right array (pivotIndex up till right pointer)
 * 4. Recursively call function to select pivot and swap
 */
var sortArray = function (nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
};

const quickSort = (array, left, right) => {
    if (left < right) {
        const partitionIndex = partition(array, left, right);
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex, right);
    }
};

const partition = (array, left, right) => {
    const pivotIndex = Math.floor((left + right) / 2);
    const pivot = array[pivotIndex];

    while(left <= right) {
        while(array[left] < pivot) {
            left++;
        }

        while(array[right] > pivot) {
            right--;
        }

        if (left <= right) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }

    return left;
};

console.log(sortArray([5,1,1,2,0,0]));