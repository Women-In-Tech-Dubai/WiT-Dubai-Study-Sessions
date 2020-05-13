/**
 * Recursion
 * Sunday, May 10th
 * https://leetcode.com/problems/word-search/
 */

/**
 *
 * Given a 2D board and a word, find if the word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically
 * neighboring. The same letter cell may not be used more than once.
 *
 * Example:
 * board =
 * [
 *  ['A','B','C','E'],
 *  ['S','F','C','S'],
 *  ['A','D','E','E']
 * ]
 *
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 *
 * Constraints: board and word consists only of lowercase and uppercase English letters.
 * 1 <= board.length <= 200
 * 1 <= board[i].length <= 200
 * 1 <= word.length <= 10^3
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0]) {
                if (helper(board, word, i, j, 0)) {
                    return true;
                }
            }
        }
    }
    return false;
};

var helper = (board, word, currentRow, currentCol, wordIndex) => {
    //base cases: end of string / out boundary of array / strings don't match

    console.log(`Checking ${currentRow} : ${currentCol}`)
    if (wordIndex >= word.length)
        return 1;

    if (currentRow >= board.length || currentRow < 0 || currentCol < 0)
        return 0;

    if (currentCol >= board[currentRow].length)
        return 0;

    if (board[currentRow][currentCol] === '0') {
        return 0;
    }

    if (word[wordIndex] != board[currentRow][currentCol])
        return 0;

    // store character, mark as seen
    let character = board[currentRow][currentCol];
    board[currentRow][currentCol] = '0';

    //recursive: call for every direction around each cell and replace cells with 0 once traversed
    const sum = helper(board, word, currentRow + 1, currentCol, wordIndex + 1) ||
        helper(board, word, currentRow, currentCol + 1, wordIndex + 1) ||
        helper(board, word, currentRow - 1, currentCol, wordIndex + 1) ||
        helper(board, word, currentRow, currentCol - 1, wordIndex + 1);

    // revert character
    board[currentRow][currentCol] = character;

    return sum;
}