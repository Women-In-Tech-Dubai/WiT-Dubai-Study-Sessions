/*

https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/


You are given two strings s1 and s2 of equal length consisting of letters "x" and "y" only. Your task is to make these two strings equal to each other. You can swap any two characters that belong to different strings, which means: swap s1[i] and s2[j].

Return the minimum number of swaps required to make s1 and s2 equal, or return -1 if it is impossible to do so.


Example 1:

Input: s1 = "xx", s2 = "yy"
Output: 1
Explanation:
Swap s1[0] and s2[1], s1 = "yx", s2 = "yx".
Example 2:

Input: s1 = "xy", s2 = "yx"
Output: 2
Explanation:
Swap s1[0] and s2[0], s1 = "yy", s2 = "xx".
Swap s1[0] and s2[1], s1 = "xy", s2 = "xy".
Note that you can't swap s1[0] and s1[1] to make s1 equal to "yx", cause we can only swap chars in different strings.
Example 3:

Input: s1 = "xx", s2 = "xy"
Output: -1
Example 4:

Input: s1 = "xxyyxyxyxx", s2 = "xyyxyxxxyx"
Output: 4


Constraints:

1 <= s1.length, s2.length <= 1000
s1, s2 only contain 'x' or 'y'.

*/

/**
 * Rules:
1. Each pair of x_y and x_y => 1 swap
2. Each pair of y_x and y_x => 1 swap
3. If left with one pair of any one => return -1
4. If left with one pair of both => swap + 2
*/

// 1. Count x_y and y_x
// 2. swap += Math.floor(x_y / 2);
// 3. remainder += (x_y/2) - Math.floor(x_y / 2);
// 4. swap += Math.floor(y_x / 2);
// 5. remainder += (y_x/2) - Math.floor(y_x / 2);
// 6. (if remainder is fraction) => return -1 else swaps += remainder * 2

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
    if (s1.length !== s2.length) {
        return -1;
    }

    let xy_count = 0;
    let yx_count = 0;

    for (let i=0; i<s1.length; i++) {
        if (s1[i] == 'x' && s2[i] == 'y') {
            xy_count++;
        }
        else if (s1[i] == 'y' && s2[i] == 'x') {
            yx_count++;
        }
    }

    let swaps = 0;
    let remainder = 0;
    swaps += Math.floor(xy_count/2);
    remainder += (xy_count/2) - Math.floor(xy_count / 2);
    swaps += Math.floor(yx_count/2);
    remainder += (yx_count/2) - Math.floor(yx_count / 2);

    if (remainder % 1 > 0) {
        return -1;
    }

    if (remainder % 1 == 0) {
        swaps += (remainder * 2)
    }

    return swaps;
};