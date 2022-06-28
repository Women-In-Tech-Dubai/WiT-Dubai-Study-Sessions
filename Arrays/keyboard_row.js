/**
 * https://leetcode.com/problems/keyboard-row/
 * 
 * Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
 * 
 * In the American keyboard:
 * - the first row consists of the characters "qwertyuiop",
 * the second row consists of the characters "asdfghjkl", and
 * the third row consists of the characters "zxcvbnm".
 * 
 * Example 1:

    Input: words = ["Hello","Alaska","Dad","Peace"]
    Output: ["Alaska","Dad"]
    
 * Example 2:

    Input: words = ["omk"]
    Output: []

 * Example 3:

    Input: words = ["adsdf","sfd"]
    Output: ["adsdf","sfd"]
 *
 * Constraints
 * - 1 <= words.length <= 20
 * - 1 <= words[i].length <= 100
 * - words[i] consists of English letters (both lowercase and uppercase). 
 */

/*
{
    'q': 1,
    'w': 1,
    'e': 1,
    ...
}

// loop through each word 
//   loop through each letter of word (starting at 0 index)
//      if (map.get(letter.toLowerCase) !== map.get(firstLetter.toLowerCase) exit the loop
//      if j === word.length - 1,  output.push(word)
// return output

*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let map1 = new Map();
    map1.set('q', 1);
    map1.set('w', 1);
    map1.set('e', 1);
    map1.set('r', 1);
    map1.set('t', 1);
    map1.set('y', 1);
    map1.set('u', 1);
    map1.set('i', 1);
    map1.set('o', 1);
    map1.set('p', 1);
    map1.set('a', 2);
    map1.set('s', 2);
    map1.set('d', 2);
    map1.set('f', 2);
    map1.set('g', 2);
    map1.set('h', 2);
    map1.set('j', 2);
    map1.set('k', 2);
    map1.set('l', 2);
    map1.set('z', 3);
    map1.set('x', 3);
    map1.set('c', 3);
    map1.set('v', 3);
    map1.set('b', 3);
    map1.set('n', 3);
    map1.set('m', 3);

    let output = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (map1.get(words[i][j].toLowerCase()) !== map1.get(words[i][0].toLowerCase())) { break; }
            if (j === words[i].length - 1) { output.push(words[i]) }
        }
    }
    return output;
};