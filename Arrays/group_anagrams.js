/**
    https://leetcode.com/problems/group-anagrams/
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

    Example 1:

    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 
    Example 2:
    Input: strs = [""]
    Output: [[""]]

    Example 3:
    Input: strs = ["a"]
    Output: [["a"]]
    

    Constraints:
    1 <= strs.length <= 10^4
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.

 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
    /*
    {
        "aet": ["eat", "tea", "ate"],
        "ant": ["tan", "nat"],
        "abt": ["bat"],
        "": [""]
    }
    */
var groupAnagrams = function(strs) {
    let map = {};

    // Loop through str in strs
    for(let i = 0; i < strs.length; i++) {
        // sort the str[i] alphabetically
        let sortedStr = strs[i].split('').sort().join('');

        // if sortedStr exists in map, push the strs[i] to the array else, insert the new key + strs[i]
        if (map[sortedStr]) {
            map[sortedStr].push(strs[i]);
        } else {
            map[sortedStr] = [strs[i]];
        }
    }

    return Object.values(map);
};

console.log(groupAnagrams(["a", "", "eat","tea","tan","ate","nat","bat", ""]));