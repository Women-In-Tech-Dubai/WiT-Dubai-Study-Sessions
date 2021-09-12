/**
    https://leetcode.com/problems/reshape-the-matrix/
 
    In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

    You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

    The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

    If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

    Example 1:
    Input: mat = [[1,2],[3,4]], r = 1, c = 4
    Output: [[1,2,3,4]]

    Example 2:
    Input: mat = [[1,2],[3,4]], r = 2, c = 4
    Output: [[1,2],[3,4]]
    
    Constraints:

    m == mat.length
    n == mat[i].length
    1 <= m, n <= 100
    -1000 <= mat[i][j] <= 1000
    1 <= r, c <= 300

 */
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    let reshapedMatrix = [];
    // 1. Flatten the mat
    let flattenedMatrix = mat.flat();

    // 2. Verify that r*c = flattenMatrix.length (if not, it is an illegal operation, return original matrix)
    if (r*c != flattenedMatrix.length) {
        return mat;
    }

    // 3. Nested loop through rows and cols to generate the new matrix
    for(let i = 0; i < r; i++) {
        reshapedMatrix.push(flattenedMatrix.splice(0, c));
    }
    // 4. Return the reshaped matrix
    return reshapedMatrix;
};