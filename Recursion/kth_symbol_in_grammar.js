/**
 *
 * https://leetcode.com/problems/k-th-symbol-in-grammar/
 *
 * K-th Symbol in Grammar
 * On the first row, we write a 0. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.
 * 
 * Given row N and index K, return the K-th indexed symbol in row N. (The values of K are 1-indexed.) (1 indexed).

Examples:
Input: N = 1, K = 1
Output: 0

Input: N = 2, K = 1
Output: 0

Input: N = 2, K = 2
Output: 1

Input: N = 4, K = 5
Output: 1

Explanation:
row 1: 0
row 2: 01
row 3: 0110
row 4: 01101001

row 5: 0110100110010110
row 6: 01101001100101101001011001101001

N will be an integer in the range [1, 30].
K will be an integer in the range [1, 2^(N-1)].
 */

/**
* @param {number} N
* @param {number} K
* @return {number}
*/
var kthGrammar = function (N, K) {

};