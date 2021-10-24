/*

Pack numbers

Given an array of integers, write a method that will pack neighbouring numbers that are the same into the string X:N, where X is the integer value and N is the sequence length.

Example:

packNumbers ((5, 5, 5, 7, 1, 3, 4, 7])

should return

["5:3", 7, 1, 3, 4, 7]

packNumbers ([5, 5, 5, 7, 1, 3, 4, 7, 5])

should return

["5:3", 7, 1, 3, 4, 7, 5]

packNumbers ([5, 5, 5, 7, 1, 1, 3, 6, 6])

should return

["5:3", 7, "1:2", 3, "6:2"]
["5:3", "7:1", "1:2", "3:1", "6:2"]

*/

/*

[5, 5, 5, 7, 1, 1, 3, 6, 6]

// 0. prevNum = array[0], result = [], count = 1, validation check: if length of array == 1, return the array
// 1. For loop through integer array starting at index 1 to the i < length of the array
// 2. if number is the same as previous number, increment count
// 3. if number is not the same, push to result array in the correct format (X:N) & reset count = 0
// 4. Return result array

*/

var packNumbers = function(nums) {
    if (nums.length === 0) {
        return [];
    }

    let result = [];
    let count = 0;

    if (nums.length === 1) {
        return nums;
    }

    for (let i = 1; i < nums.length; i++) {
        count++; 
        if (nums[i] !== nums[i-1]) {
            result.push(count === 1 ? nums[i-1] : nums[i-1] + ":" + count);
            count = 0;
        }
    }

    count++;
    result.push(count === 1 ? nums[nums.length - 1] : nums[nums.length - 1] + ":" + count);

    return result;
};

console.log(packNumbers([5, 5, 5, 7, 1, 1, 3, 6, 6]));
console.log(packNumbers([5, 6, 5]));
console.log(packNumbers([5, 5, 5, 7, 1, 3, 4, 7]));
console.log(packNumbers([0]));
console.log(packNumbers([5, -5, 5, 7, 1, 3, -4, 7, 7, 7, -7]));