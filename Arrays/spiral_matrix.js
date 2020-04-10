/**
 * https://leetcode.com/problems/spiral-matrix/
 * 
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 */

 /**
  * Involves a layer-by-layer approach
  * The answer will be all the elements in clockwise order from the first-outer layer, followed by the elements from the second-outer
  * layer, and so on.
  */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
       return matrix;
   }
   let spiral = [];
   let rows = matrix.length - 1;
   let cols = matrix[0].length - 1;
   
   let rowStart = 0;
   let rowEnd = rows;
 
   let colStart = 0;
   let colEnd = cols;
 
   while (rowStart <= rowEnd && colStart <= colEnd) {
             
     for(let i = colStart; i <= colEnd; i++) {
       spiral.push(matrix[rowStart][i]);
     }
       
     rowStart++;      
     
     for(let i = rowStart; i <= rowEnd; i++) {
       spiral.push(matrix[i][colEnd]);
     }
           
     colEnd--;
       
     if(rowStart <= rowEnd) {
       for(let i = colEnd; i >= colStart; i--) {
         spiral.push(matrix[rowEnd][i]);
       }
     }
             
     rowEnd--; 
     if (colStart <= colEnd) {
       for(let i = rowEnd; i >= rowStart; i--) {
           spiral.push(matrix[i][colStart]);
       }
     }
             
     colStart++;
   }
       
   return spiral;
};