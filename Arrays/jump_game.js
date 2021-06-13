/**
 * https://leetcode.com/problems/jump-game/
 * 
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array. 
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
     if (nums.length == 1) {
        return true;
     }
    return helper(0, nums);
};

const memo = {};
const helper = function (index, nums) {
    // Base case
    if (index >= nums.length) {
        return true;
    }
    
    // If we've previously determined that we can reached the end
    // from this index, then return true
    if (memo[index]) {
        return memo[index];
    }
        
    const maxJumpLength = nums[index];
    let canReachEnd = false;
    for(let i = 1; i <= maxJumpLength; i++) {
        if (memo[index+i]) {
            return memo[index+i];
        }
        canReachEnd = helper(index+i, nums);
        memo[index+i] = canReachEnd;
        if (canReachEnd) {
            return true;
        }
    }
    return canReachEnd;
}

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));