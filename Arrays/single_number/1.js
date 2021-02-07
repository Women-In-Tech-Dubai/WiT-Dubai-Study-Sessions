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
    Each element in the array appears twice except for one element which appears only once


    [1,2,4,1,2]

count_hahs = 
*/

# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
    count_hash = {}
    nums.each do |n|
        count_hash[num] = count_hash[num] ? count_hash[num] + 1 : 1  
    end

    res = count_hash.find{|key, val| val == 1}
    res
end


puts single_number(nums)