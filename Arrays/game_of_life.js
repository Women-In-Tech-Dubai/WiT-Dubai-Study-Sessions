/*
    According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

    The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

    Live cells:
    - Any live cell with fewer than two live neighbors dies as if caused by under-population.
    - Any live cell with two or three live neighbors lives on to the next generation.
    - Any live cell with more than three live neighbors dies, as if by over-population.

    Dead cells:
    - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

    0 => dead
    1 => live

    The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.


    Example 1:
    Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
    Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

    Example 2:
    Input: board = [[1,1],[1,0]]
    Output: [[1,1],[1,1]]

    Constraints:
        m == board.length
        n == board[i].length
        1 <= m, n <= 25
        board[i][j] is 0 or 1.

    Follow up:
    Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
    In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?
*/
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    // track rows, columns
    let rows = board.length;
    let cols = board[0].length;

    // Make a copy of the board
    const originalBoard = JSON.parse(JSON.stringify(board));

    // Iterate through copy
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            let countOfLiveNeighbours = 0;

            // top row
            let topRow = i - 1;
            if (topRow >= 0) {
                if (originalBoard[topRow][j - 1]) {
                    countOfLiveNeighbours++;
                }
                if (originalBoard[topRow][j]) {
                    countOfLiveNeighbours++;
                }
                if (originalBoard[topRow][j+1]) {
                    countOfLiveNeighbours++;
                }
            }

            // current row
            if (originalBoard[i][j - 1]) {
                countOfLiveNeighbours++;
            }
            if (originalBoard[i][j+1]) {
                countOfLiveNeighbours++;
            }

            // bottom row
            let bottomRow = i + 1;
            if (bottomRow < rows) {
                if (originalBoard[bottomRow][j - 1]) {
                    countOfLiveNeighbours++;
                }
                if (originalBoard[bottomRow][j]) {
                    countOfLiveNeighbours++;
                }
                if (originalBoard[bottomRow][j+1]) {
                    countOfLiveNeighbours++;
                }
            }

            if (originalBoard[i][j]) {
                if (countOfLiveNeighbours < 2 || countOfLiveNeighbours > 3) {
                    board[i][j] = 0;
                }
            } else if (countOfLiveNeighbours == 3) {
                board[i][j] = 1;
            }
        }
    }
};

