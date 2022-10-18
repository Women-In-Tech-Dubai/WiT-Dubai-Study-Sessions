/* 
https://leetcode.com/problems/repeated-dna-sequences/

The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. 
You may return the answer in any order.

 

Example 1:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
Example 2:

Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"] 

ACACACACACGGGGACACACACAC
Constraints:

1 <= s.length <= 105
s[i] is either 'A', 'C', 'G', or 'T'.


loop i = 0, i< s - 10; i++
    get the substring
    check index of and last index of
    if index of == last index of, then that means it occurred only once
    add to a result array




*/

// VERSION 1
var findRepeatedDnaSequences = function (s) {
    var result = new Set();
    for (i = 0; i < s.length - 9; i++) {
        var substring = s.substring(i, i + 10);
        if (s.indexOf(substring) != s.lastIndexOf(substring))
            result.add(substring);
    }
    return [...result];
};

var findRepeatedDnaSequencesV2 = function (s) {
    var hashMap = {};
    let result = new Set();
    for (i = 0; i < s.length - 9; i++) {
        var substring = s.substring(i, i + 10);
        if (hashMap[substring]) {
            hashMap[substring]++;

            if (hashMap[substring] == 2) {
                result.add(substring);
            }
        } else {
            hashMap[substring] = 1;
        }
    }
    return [...result];
};

console.log(findRepeatedDnaSequencesV2("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")); // Output: ["AAAAACCCCC","CCCCCAAAAA"]
console.log(findRepeatedDnaSequencesV2("AAAAAAAAAAAAA")) // Output: ["AAAAAAAAAA"] 