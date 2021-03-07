/*

https://leetcode.com/problems/boats-to-save-people/


You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.


Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
Example 3:

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)

Constraints:

1 <= people.length <= 5 * 104
1 <= people[i] <= limit <= 3 * 104
*/

// [3,5,1,3,4] limit = 5
// [1,3,3,4,5]
// [5, 4, 3, 3, 1]
// 1. Sort people array desc
// 2. for each index, another pointer (j) that iterates through the rest of the array
// 3. if (people[i] == limit) count++
// 3a. if (people[i] < limit) => totalWeight < limit, count++, remove people[j] OR totalWeight > limit, j++ OTHERWISE count++


// 1. Sort people array
// 2. Two pointers: smallest and biggest
// 3. smallest < people.length && biggest >= 0 && biggest <= smallest
// 4. if (people[biggest] == limit) => count++, biggest--;
// 4a. if (people[biggest] < limit) => totalWeight


/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
    let sortedPeople = people.sort((a, b) => b - a);
    let numberOfBoats = 0;

    for(let i = 0; i < sortedPeople.length; i++) {
        if (sortedPeople[i] == limit) {
            numberOfBoats++;
        } else {
            for(let j = i+1; j < sortedPeople.length; j++) {
                let totalWeight = sortedPeople[i] + sortedPeople[j];
                if (totalWeight <= limit) {
                    sortedPeople.splice(j, 1);
                    break;
                }
            }
            numberOfBoats++;
        }
    }
    return numberOfBoats;
};