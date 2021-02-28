/*

https://leetcode.com/problems/product-of-array-except-self/


Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

//[1,2,3,4]
//[24,12,8,6]

//Step 1
//[2 * 3 * 4] = 24
//[1 * 3 * 4] = 12
//[1 * 2 * 4] = 8
//[1 * 2 * 3] = 6

// leftProduct * rightProduct = totalProduct

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let outputs = [];
    for(let i = 0; i < nums.length; i++) {
        let leftProduct = 1;
        for(let j = i - 1; j >= 0; j--) {
            leftProduct *= nums[j];
        }

        let rightProduct = 1;
        for(let k = i + 1; k < nums.length; k++) {
            rightProduct *= nums[k];
        }
        outputs[i] = leftProduct * rightProduct;
    }
    return outputs;
};

console.log(productExceptSelf([1,2,3,4]));

// // // Base case: i < 0 || i > nums.length
// // // Recursive sequence:

// // const helper = (split_array, index) => {
// //     split_array[index]*=total
// // }

// // const base = function(nums) {
// //     //base case
// //     let outputs = [];
// //     for(let i = 0; i < nums.length; i++) {
// //         outputs[i] = helper(i - 1, 0) * helper(i - 1, 0)
// //     }
// //     return outputs;
// // }

const base = function(nums) {
    let outputs = [];
    helper(nums, 0, outputs);
    return outputs;
}

const helper = (nums, index, outputs) => {
    if (index >= nums.length) {
        return;
    }
    let leftProduct = 1;
    for(let j = index - 1; j >= 0; j--) {
        leftProduct *= nums[j];
    }

    let rightProduct = 1;
    for(let k = index + 1; k < nums.length; k++) {
        rightProduct *= nums[k];
    }
    outputs[index] = leftProduct * rightProduct;
    helper(nums, ++index, outputs);
}

// console.log("recursion: ", base([1,2,3,4]));

var productExceptSelf = function(nums) {
    const result = [];
    let productSoFar = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = productSoFar
        productSoFar *= nums[i]
        console.log("left calculation:", nums[i]);
        console.log("left product", productSoFar);
    }
    console.log("left product result", result);
    productSoFar = 1
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] *= productSoFar
        productSoFar *= nums[j]
        console.log("right calculation:", nums[j]);
        console.log("right product", productSoFar);
    }
    console.log("right product result", result);
    return result;
};

console.log("productExceptSelf: ", productExceptSelf([1,2,3,4]));

// nums > 1,2,3,4
// first prod > 1, 2, 6, 24
// first pass > 1, 1, 2, 6

// second pass > 24, 12,8, 6