/*
    Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

    Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?


    Example 1:

    Input: nums = [2,2,1]
    Output: 1
    Example 2:

    Input: nums = [4,1,2,1,2]
    Output: 4
    Example 3:

    Input: nums = [1]
    Output: 1


    Constraints:

    1 <= nums.length <= 3 * 104
    -3 * 104 <= nums[i] <= 3 * 104
    Each element in the array appears twice except for one element which appears only once.
*/
let func = (nums) => {
    let hashmap = {};
    for (let i = 0; i<nums.length; i++) {
        if (hashmap[nums[i]]) {
            hashmap[nums[i]] += 1;
        }
        else {
            hashmap[nums[i]] = 1;
        }
    }

    console.log(hashmap)

    for (const [key, value] of Object.entries(hashmap)) {
        if (value == 1) {
            return key;
        }
      }

      // complexity = N
}



console.log(func([4,1,2,1,2]))